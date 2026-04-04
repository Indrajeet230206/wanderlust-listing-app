const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });

const listingcontroller = require("../controllers/listings.js");

//search route
router.get("/search", wrapAsync(listingcontroller.search));

router
    .route("/")
    .get(wrapAsync(listingcontroller.index)) //index route
    .post(isLoggedIn, upload.single('listing[image]'), validateListing, wrapAsync(listingcontroller.createListing)); //create route

//new route
router.get("/new", isLoggedIn, listingcontroller.renderNewForm);

router
    .route("/:id")
    .get(wrapAsync(listingcontroller.showListing)) //  show route
    .put(isLoggedIn, isOwner, upload.single('listing[image]'), validateListing, wrapAsync(listingcontroller.updateListing)) //Update route
    .delete(isLoggedIn, isOwner, wrapAsync(listingcontroller.destroyListing)); //delete route

//edit route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingcontroller.renderEditForm));

module.exports = router;