const mongoose = require("mongoose");
const Review = require("./review");
const Schema = mongoose.Schema;
// const Review = require("./review.js");

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    image: {
        default: "https://www.pexels.com/search/beautiful/",
        type: String,
        set: (v) => v===""?"https://www.pexels.com/search/beautiful/":v
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ]
});

listingSchema.post("findOneAndDelete", async (listing) => {
    if(listing){
        await Review.deleteMany({_id: {$in: listing.reviews}});
    };
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;