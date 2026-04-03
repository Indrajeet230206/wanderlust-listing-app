require("dotenv").config();
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

// const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";
const dbUrl = process.env.ATLASDB_URL;

main().then(() => {
    console.log("connected to db");
}).catch((err) => {
    console.log(err)
});

async function main() {
    await mongoose.connect(dbUrl);
};

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "69cf770acf96cf1ccddc1ef7",
    geometry: {
        type: "Point",
        coordinates: [73.8567, 18.5204] // Pune (same for all)
    }
    }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();