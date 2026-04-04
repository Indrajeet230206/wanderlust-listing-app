const Listing = require("../models/listing");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken});


module.exports.index = async (req, res) => {
    let q = req.query.cat;
    if(q){
        let allListings = await Listing.find({category: q});
        return res.render("listings/index.ejs", { allListings, q});
    }
    allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
};

module.exports.search = async(req, res) => {
    
    let q = req.query.q?.trim();

    if (!q) return res.redirect("/listings");

    let allListings = await Listing.find({
        $or: [
        { title: { $regex: "^" + q, $options: "i" } },
        { location: { $regex: "^" + q, $options: "i" } }
    ]
    });

    res.render("listings/index.ejs", { allListings, q });
}

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id).populate({path: "reviews", populate: {path: "author"}}).populate("owner");
    if(!listing) {
        req.flash("error", "listing you requeste for does not exist!");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs", {listing});
};

module.exports.createListing = async (req, res, next) => {
    let response = await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1
    })
        .send()

    if (!response.body.features.length) {
        req.flash("error", "Invalid location");
        return res.redirect("/listings/new");
    }

    // let {title, description, image, price, country, location} = req.body;
    let url = req.file.path;
    let filename = req.file.filename
    const newlisting = new Listing(req.body.listing);
    newlisting.owner = req.user._id;
    newlisting.image = {url, filename};

    newlisting.geometry = response.body.features[0].geometry;

    await newlisting.save();
    req.flash("success", "New listing created");
    res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing) {
        req.flash("error", "listing you requeste for does not exist!");
        return res.redirect("/listings");
    }

    let originalImageUrl = listing.image.url;
    console.log(originalImageUrl);
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
    res.render("listings/edit.ejs", {listing, originalImageUrl});
};

module.exports.updateListing = async (req, res) => {
    let {id} = req.params;
    if (req.file) {
        req.body.listing.image = {
            url: req.file.path,
            filename: req.file.filename
        };
    }

    // 1️⃣ Geocode new location
    let response = await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1
    }).send();

    if (!response.body.features.length) {
        req.flash("error", "Invalid location");
        return res.redirect(`/listings/${id}/edit`);
    }

    const geometry = response.body.features[0].geometry;

    // 2️⃣ Update listing + geometry
    let updatedListing = await Listing.findByIdAndUpdate(id, {
        ...req.body.listing,
        geometry: geometry
    }, { new: true });

    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    // let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});

    // if (typeof req.file !== "undefined") {
    //     let url = req.file.path;
    //     let filename = req.file.filename;
    //     listing.image = {url, filename};
    //     await listing.save();
    // }

    req.flash("success", "listing updated");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "listing deleted");
    res.redirect("/listings");
};