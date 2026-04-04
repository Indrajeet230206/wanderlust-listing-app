const sampleListings = [
    {
        title: "Cozy Beachfront Cottage",
        description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
        category: "room",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=400&auto=format&fit=crop&q=60" },
        price: 1500, location: "Malibu", country: "United States",
    },
    {
        title: "Modern Loft in Downtown",
        description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
        category: "iconicCities",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&auto=format&fit=crop&q=60" },
        price: 1200, location: "New York City", country: "United States",
    },
    {
        title: "Mountain Retreat",
        description: "Unplug and unwind in this peaceful mountain cabin surrounded by nature.",
        category: "mountains",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&auto=format&fit=crop&q=60" },
        price: 1000, location: "Aspen", country: "United States",
    },
    {
        title: "Historic Villa in Tuscany",
        description: "Experience the charm of Tuscany in this beautifully restored villa.",
        category: "iconicCities",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&auto=format&fit=crop&q=60" },
        price: 2500, location: "Florence", country: "Italy",
    },
    {
        title: "Secluded Treehouse Getaway",
        description: "Live among the treetops in this unique treehouse retreat.",
        category: "camping",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&auto=format&fit=crop&q=60" },
        price: 800, location: "Portland", country: "United States",
    },
    {
        title: "Beachfront Paradise",
        description: "Step out of your door onto the sandy beach.",
        category: "room",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&auto=format&fit=crop&q=60" },
        price: 2000, location: "Cancun", country: "Mexico",
    },
    {
        title: "Rustic Cabin by the Lake",
        description: "Perfect place for fishing and kayaking.",
        category: "camping",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&auto=format&fit=crop&q=60" },
        price: 900, location: "Lake Tahoe", country: "United States",
    },
    {
        title: "Luxury Penthouse with City Views",
        description: "Indulge in luxury living with panoramic views.",
        category: "iconicCities",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?w=400&auto=format&fit=crop&q=60" },
        price: 3500, location: "Los Angeles", country: "United States",
    },
    {
        title: "Ski-In/Ski-Out Chalet",
        description: "Hit the slopes right from your doorstep.",
        category: "mountains",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?w=400&auto=format&fit=crop&q=60" },
        price: 3000, location: "Verbier", country: "Switzerland",
    },
    {
        // FIX: "farms" was wrong for a safari lodge — "camping" is the closest valid category
        title: "Safari Lodge in the Serengeti",
        description: "Experience the thrill of the wild in comfort.",
        category: "camping",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=400&auto=format&fit=crop&q=60" },
        price: 4000, location: "Serengeti National Park", country: "Tanzania",
    },
    {
        title: "Historic Canal House",
        description: "Stay in a beautiful canal house in Amsterdam.",
        category: "iconicCities",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&auto=format&fit=crop&q=60" },
        price: 1800, location: "Amsterdam", country: "Netherlands",
    },
    {
        title: "Private Island Retreat",
        description: "Have an entire island to yourself.",
        category: "boats",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?w=400&auto=format&fit=crop&q=60" },
        price: 10000, location: "Fiji", country: "Fiji",
    },
    {
        // FIX: "farms" is reasonable here but "room" better fits a countryside cottage rental
        title: "Charming Cottage in the Cotswolds",
        description: "A picturesque countryside cottage.",
        category: "farms",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?w=400&auto=format&fit=crop&q=60" },
        price: 1200, location: "Cotswolds", country: "United Kingdom",
    },
    {
        title: "Historic Brownstone in Boston",
        description: "Elegant historic brownstone in Boston.",
        category: "iconicCities",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?w=400&auto=format&fit=crop&q=60" },
        price: 2200, location: "Boston", country: "United States",
    },
    {
        title: "Beachfront Bungalow in Bali",
        description: "Relax on the sandy shores of Bali.",
        category: "room",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1602391833977-358a52198938?w=400&auto=format&fit=crop&q=60" },
        price: 1800, location: "Bali", country: "Indonesia",
    },
    {
        title: "Mountain View Cabin in Banff",
        description: "Enjoy breathtaking mountain views.",
        category: "mountains",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?w=400&auto=format&fit=crop&q=60" },
        price: 1500, location: "Banff", country: "Canada",
    },
    {
        title: "Art Deco Apartment in Miami",
        description: "Step into the glamour of the 1920s.",
        category: "iconicCities",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1670963964797-942df1804579?w=400&auto=format&fit=crop&q=60" },
        price: 1600, location: "Miami", country: "United States",
    },
    {
        title: "Tropical Villa in Phuket",
        description: "Luxurious villa with infinity pool.",
        category: "amazingpools",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?w=400&auto=format&fit=crop&q=60" },
        price: 3000, location: "Phuket", country: "Thailand",
    },
    {
        title: "Historic Castle in Scotland",
        description: "Live like royalty in a castle.",
        category: "castles",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?w=400&auto=format&fit=crop&q=60" },
        price: 4000, location: "Scottish Highlands", country: "United Kingdom",
    },
    {
        title: "Desert Oasis in Dubai",
        description: "Luxury in the middle of the desert.",
        category: "iconicCities",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=400&auto=format&fit=crop&q=60" },
        price: 5000, location: "Dubai", country: "United Arab Emirates",
    },
    {
        title: "Rustic Log Cabin in Montana",
        description: "Cozy log cabin surrounded by nature.",
        category: "mountains",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?w=400&auto=format&fit=crop&q=60" },
        price: 1100, location: "Montana", country: "United States",
    },
    {
        title: "Beachfront Villa in Greece",
        description: "Crystal-clear Mediterranean waters.",
        category: "room",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=400&auto=format&fit=crop&q=60" },
        price: 2500, location: "Mykonos", country: "Greece",
    },
    {
        title: "Eco-Friendly Treehouse Retreat",
        description: "Stay in an eco-friendly treehouse.",
        category: "camping",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?w=400&auto=format&fit=crop&q=60" },
        price: 750, location: "Costa Rica", country: "Costa Rica",
    },
    {
        title: "Historic Cottage in Charleston",
        description: "Charming historic cottage.",
        category: "iconicCities",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?w=400&auto=format&fit=crop&q=60" },
        price: 1600, location: "Charleston", country: "United States",
    },
    {
        title: "Modern Apartment in Tokyo",
        description: "Explore vibrant Tokyo.",
        category: "iconicCities",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=400&auto=format&fit=crop&q=60" },
        price: 2000, location: "Tokyo", country: "Japan",
    },
    {
        title: "Lakefront Cabin in New Hampshire",
        description: "Cozy cabin in the White Mountains.",
        category: "camping",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?w=400&auto=format&fit=crop&q=60" },
        price: 1200, location: "New Hampshire", country: "United States",
    },
    {
        title: "Luxury Villa in the Maldives",
        description: "Overwater villa with ocean views.",
        category: "amazingpools",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&auto=format&fit=crop&q=60" },
        price: 6000, location: "Maldives", country: "Maldives",
    },
    {
        title: "Ski Chalet in Aspen",
        description: "Luxurious ski chalet in Aspen.",
        category: "mountains",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&auto=format&fit=crop&q=60" },
        price: 4000, location: "Aspen", country: "United States",
    },
    {
        title: "Secluded Beach House in Costa Rica",
        description: "Surf and relax on the Pacific coast.",
        category: "room",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=400&auto=format&fit=crop&q=60" },
        price: 1800, location: "Costa Rica", country: "Costa Rica",
    },

    // ── Arctic ──────────────────────────────────────────────────────────────────
    {
        title: "Igloo Stay in Arctic Circle",
        description: "Experience extreme cold in a cozy igloo.",
        category: "arctic",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1516910817561-8d7b3e0c1f42?w=400&auto=format&fit=crop&q=60" },
        price: 5000, location: "Arctic Circle", country: "Norway",
    },
    {
        // NEW: second arctic listing
        title: "Aurora Cabin in Tromsø",
        description: "Watch the northern lights dance from your private glass-roofed cabin in the Norwegian wilderness.",
        category: "arctic",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=400&auto=format&fit=crop&q=60" },
        price: 3500, location: "Tromsø", country: "Norway",
    },

    // ── Domes ───────────────────────────────────────────────────────────────────
    {
        // FIX: replaced duplicate NYC image with a proper geodesic dome / aurora image
        title: "Glass Dome Stay in Iceland",
        description: "Sleep under the northern lights in a glass dome.",
        category: "domes",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&auto=format&fit=crop&q=60" },
        price: 4500, location: "Iceland", country: "Iceland",
    },
    {
        // NEW: second domes listing
        title: "Geodesic Dome in Patagonia",
        description: "Sleep inside a transparent geodesic dome with unobstructed views of Torres del Paine's dramatic peaks and star-filled skies.",
        category: "domes",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?w=400&auto=format&fit=crop&q=60" },
        price: 3800, location: "Torres del Paine", country: "Chile",
    },

    // ── Boats ───────────────────────────────────────────────────────────────────
    {
        // NEW: second boats listing
        title: "Houseboat on Dal Lake",
        description: "Drift through the serene waters of Dal Lake on a traditional Kashmiri houseboat, complete with hand-carved walnut interiors and mountain views.",
        category: "boats",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&auto=format&fit=crop&q=60" },
        price: 1400, location: "Srinagar", country: "India",
    },

    // ── Castles ─────────────────────────────────────────────────────────────────
    {
        // NEW: second castles listing
        title: "Medieval Castle in Loire Valley",
        description: "Spend the night in a fully restored medieval château surrounded by vineyards and formal French gardens.",
        category: "castles",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1548013146-72479768bada?w=400&auto=format&fit=crop&q=60" },
        price: 3200, location: "Loire Valley", country: "France",
    },

    // ── Amazing Pools ────────────────────────────────────────────────────────────
    {
        // NEW: third amazingpools listing
        title: "Cliffside Infinity Pool Villa, Santorini",
        description: "Perched on the volcanic caldera, this whitewashed villa features a stunning infinity pool that appears to merge seamlessly with the Aegean Sea below.",
        category: "amazingpools",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1570213489059-0aac6626cade?w=400&auto=format&fit=crop&q=60" },
        price: 4500, location: "Santorini", country: "Greece",
    },

    // ── Farms ────────────────────────────────────────────────────────────────────
    {
        // NEW: second farms listing (Cotswolds stays as farms, this adds variety)
        title: "Lavender Farm Stay in Provence",
        description: "Wake up to endless rows of lavender on a working farm in the heart of Provence. Enjoy farm-fresh breakfasts and guided vineyard tours.",
        category: "farms",
        image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1499678329028-101435549a4e?w=400&auto=format&fit=crop&q=60" },
        price: 950, location: "Provence", country: "France",
    },
];

module.exports = { data: sampleListings };