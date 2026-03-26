const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const listingcontroller = require("../controllers/listings.js");

//index route
router.get("/", wrapAsync(listingcontroller.index));

//new route
router.get("/new", isLoggedIn, listingcontroller.renderNewForm);

//create route
router.post("/", isLoggedIn, validateListing, wrapAsync(listingcontroller.createListing));

//show route
router.get("/:id", wrapAsync(listingcontroller.showListing));

//edit route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingcontroller.renderEditForm));

//Update route
router.put("/:id", isLoggedIn, isOwner, validateListing, wrapAsync(listingcontroller.updateListing));

//delete route
router.delete("/:id", isLoggedIn, isOwner, wrapAsync(listingcontroller.destroyListing));

module.exports = router;