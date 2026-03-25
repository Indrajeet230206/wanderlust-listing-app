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
        default: "https://play-lh.googleusercontent.com/5WTYuaEvBSQ3Eh_YbzH-MCwQeB3wdEvXoxXGVDtvpeFSunyeXbVwjmul6y5J1d2rKeg",
        type: String,
        set: (v) => v===""?"https://play-lh.googleusercontent.com/5WTYuaEvBSQ3Eh_YbzH-MCwQeB3wdEvXoxXGVDtvpeFSunyeXbVwjmul6y5J1d2rKeg":v
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

listingSchema.post("findOneAndDelete", async (listing) => {
    if(listing){
        await Review.deleteMany({_id: {$in: listing.reviews}});
    };
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;