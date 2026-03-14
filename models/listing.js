const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
    country: String
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;