// Script to load JSON data into Firestore database
// Credit: https://medium.com/lucas-moyer/how-to-import-json-data-into-firestore-2b370486b622

const firebase = require("firebase");
require("firebase/firestore");

var firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-auth-domain",
    databaseURL: "your-db-url",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-senderID",
    appId: "your-appID"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

var items = [
  {
    "item_name": "Anchovy",
    "category": "fish",
    "price": 200
  },
  {
    "item_name": "Angelfish",
    "category": "fish",
    "price": 3000
  },
  {
    "item_name": "Arapaima",
    "category": "fish",
    "price": 10000
  },
  {
    "item_name": "Arowana",
    "category": "fish",
    "price": 10000
  },
  {
    "item_name": "Barred Knifejaw",
    "category": "fish",
    "price": 5000
  },
  {
    "item_name": "Barreleye",
    "category": "fish",
    "price": 12000
  },
  {
    "item_name": "Betta",
    "category": "fish",
    "price": 2500
  },
  {
    "item_name": "Bitterling",
    "category": "fish",
    "price": 900
  },
  {
    "item_name": "Black Bass",
    "category": "fish",
    "price": 400
  },
  {
    "item_name": "Blowfish",
    "category": "fish",
    "price": 5000
  },
  {
    "item_name": "Blue Marlin",
    "category": "fish",
    "price": 10000
  },
  {
    "item_name": "Bluegill",
    "category": "fish",
    "price": 180
  },
  {
    "item_name": "Butterfly Fish",
    "category": "fish",
    "price": 1000
  },
  {
    "item_name": "Carp",
    "category": "fish",
    "price": 300
  },
  {
    "item_name": "Catfish",
    "category": "fish",
    "price": 800
  },
  {
    "item_name": "Char",
    "category": "fish",
    "price": 3800
  },
  {
    "item_name": "Cherry Salmon",
    "category": "fish",
    "price": 1000
  },
  {
    "item_name": "Clownfish",
    "category": "fish",
    "price": 650
  },
  {
    "item_name": "Coelacanth",
    "category": "fish",
    "price": 15000
  },
  {
    "item_name": "Crawfish",
    "category": "fish",
    "price": 200
  },
  {
    "item_name": "Crucian Carp",
    "category": "fish",
    "price": 160
  },
  {
    "item_name": "Dab",
    "category": "fish",
    "price": 300
  },
  {
    "item_name": "Dace",
    "category": "fish",
    "price": 240
  },
  {
    "item_name": "Dorado",
    "category": "fish",
    "price": 15000
  },
  {
    "item_name": "Football Fish",
    "category": "fish",
    "price": 2500
  },
  {
    "item_name": "Freshwater Goby",
    "category": "fish",
    "price": 400
  },
  {
    "item_name": "Frog",
    "category": "fish",
    "price": 120
  },
  {
    "item_name": "Gar",
    "category": "fish",
    "price": 6000
  },
  {
    "item_name": "Giant Snakehead",
    "category": "fish",
    "price": 6500
  },
  {
    "item_name": "Giant Trevally",
    "category": "fish",
    "price": 4500
  },
  {
    "item_name": "Golden Trout",
    "category": "fish",
    "price": 15000
  },
  {
    "item_name": "Goldfish",
    "category": "fish",
    "price": 1300
  },
  {
    "item_name": "Great White Shark",
    "category": "fish",
    "price": 15000
  },
  {
    "item_name": "Guppy",
    "category": "fish",
    "price": 1300
  },
  {
    "item_name": "Hammerhead Shark",
    "category": "fish",
    "price": 8000
  },
  {
    "item_name": "Horse Mackerel",
    "category": "fish",
    "price": 150
  },
  {
    "item_name": "Killifish",
    "category": "fish",
    "price": 300
  },
  {
    "item_name": "King Salmon",
    "category": "fish",
    "price": 1800
  },
  {
    "item_name": "Koi",
    "category": "fish",
    "price": 4000
  },
  {
    "item_name": "Loach",
    "category": "fish",
    "price": 400
  },
  {
    "item_name": "Mahi-mahi",
    "category": "fish",
    "price": 6000
  },
  {
    "item_name": "Mitten Crab",
    "category": "fish",
    "price": 2000
  },
  {
    "item_name": "Moray Eel",
    "category": "fish",
    "price": 2000
  },
  {
    "item_name": "Napoleonfish",
    "category": "fish",
    "price": 10000
  },
  {
    "item_name": "Neon Tetra",
    "category": "fish",
    "price": 500
  },
  {
    "item_name": "Nibble Fish",
    "category": "fish",
    "price": 1500
  },
  {
    "item_name": "Oarfish",
    "category": "fish",
    "price": 9000
  },
  {
    "item_name": "Ocean Sunfish",
    "category": "fish",
    "price": 4000
  },
  {
    "item_name": "Olive Flounder",
    "category": "fish",
    "price": 800
  },
  {
    "item_name": "Pale Chub",
    "category": "fish",
    "price": 200
  },
  {
    "item_name": "Pike",
    "category": "fish",
    "price": 1800
  },
  {
    "item_name": "Piranha",
    "category": "fish",
    "price": 2500
  },
  {
    "item_name": "Pond Smelt",
    "category": "fish",
    "price": 320
  },
  {
    "item_name": "Pop-eyed Goldfish",
    "category": "fish",
    "price": 1300
  },
  {
    "item_name": "Puffer Fish",
    "category": "fish",
    "price": 250
  },
  {
    "item_name": "Rainbowfish",
    "category": "fish",
    "price": 800
  },
  {
    "item_name": "Ranchu Goldfish",
    "category": "fish",
    "price": 4500
  },
  {
    "item_name": "Ray",
    "category": "fish",
    "price": 3000
  },
  {
    "item_name": "Red Snapper",
    "category": "fish",
    "price": 3000
  },
  {
    "item_name": "Ribbon Eel",
    "category": "fish",
    "price": 600
  },
  {
    "item_name": "Saddled Bichir",
    "category": "fish",
    "price": 4000
  },
  {
    "item_name": "Salmon",
    "category": "fish",
    "price": 700
  },
  {
    "item_name": "Saw Shark",
    "category": "fish",
    "price": 12000
  },
  {
    "item_name": "Sea Bass",
    "category": "fish",
    "price": 400
  },
  {
    "item_name": "Sea Butterfly",
    "category": "fish",
    "price": 1000
  },
  {
    "item_name": "Seahorse",
    "category": "fish",
    "price": 1100
  },
  {
    "item_name": "Snapping Turtle",
    "category": "fish",
    "price": 5000
  },
  {
    "item_name": "Soft-shelled Turtle",
    "category": "fish",
    "price": 3750
  },
  {
    "item_name": "Squid",
    "category": "fish",
    "price": 500
  },
  {
    "item_name": "Stringfish",
    "category": "fish",
    "price": 15000
  },
  {
    "item_name": "Sturgeon",
    "category": "fish",
    "price": 10000
  },
  {
    "item_name": "Suckerfish",
    "category": "fish",
    "price": 1500
  },
  {
    "item_name": "Surgeon Fish",
    "category": "fish",
    "price": 1000
  },
  {
    "item_name": "Sweetfish",
    "category": "fish",
    "price": 900
  },
  {
    "item_name": "Tadpole",
    "category": "fish",
    "price": 100
  },
  {
    "item_name": "Tilapia",
    "category": "fish",
    "price": 800
  },
  {
    "item_name": "Tuna",
    "category": "fish",
    "price": 7000
  },
  {
    "item_name": "Whale Shark",
    "category": "fish",
    "price": 13000
  },
  {
    "item_name": "Yellow Perch",
    "category": "fish",
    "price": 300
  },
  {
    "item_name": "Zebra Turkeyfish",
    "category": "fish",
    "price": 500
  },
  {
    "item_name": "Agrias Butterfly",
    "category": "bug",
    "price": 3000
  },
  {
    "item_name": "Ant",
    "category": "bug",
    "price": 80
  },
  {
    "item_name": "Atlas Moth",
    "category": "bug",
    "price": 3000
  },
  {
    "item_name": "Bagworm",
    "category": "bug",
    "price": 600
  },
  {
    "item_name": "Banded Dragonfly",
    "category": "bug",
    "price": 4500
  },
  {
    "item_name": "Bell Cricket",
    "category": "bug",
    "price": 430
  },
  {
    "item_name": "Blue Weevil Beatle",
    "category": "bug",
    "price": "Unknown"
  },
  {
    "item_name": "Brown Cicada",
    "category": "bug",
    "price": 200
  },
  {
    "item_name": "Centipede",
    "category": "bug",
    "price": 430
  },
  {
    "item_name": "Cicada Shell",
    "category": "bug",
    "price": 100
  },
  {
    "item_name": "Citrus Long-Horned Beetle",
    "category": "bug",
    "price": 350
  },
  {
    "item_name": "Common Bluebottle",
    "category": "bug",
    "price": 300
  },
  {
    "item_name": "Common Butterfly",
    "category": "bug",
    "price": 160
  },
  {
    "item_name": "Cricket",
    "category": "bug",
    "price": 130
  },
  {
    "item_name": "Cyclommatus Stag",
    "category": "bug",
    "price": 8000
  },
  {
    "item_name": "Damselfly",
    "category": "bug",
    "price": 500
  },
  {
    "item_name": "Darner Dragonfly",
    "category": "bug",
    "price": 250
  },
  {
    "item_name": "Diving Beetle",
    "category": "bug",
    "price": 800
  },
  {
    "item_name": "Drone Beetle",
    "category": "bug",
    "price": 80
  },
  {
    "item_name": "Dung Beetle",
    "category": "bug",
    "price": 2500
  },
  {
    "item_name": "Earth-Boring Dung Beetle",
    "category": "bug",
    "price": 300
  },
  {
    "item_name": "Emperor Butterfly",
    "category": "bug",
    "price": 4000
  },
  {
    "item_name": "Evening Cicada",
    "category": "bug",
    "price": 550
  },
  {
    "item_name": "Firefly",
    "category": "bug",
    "price": 300
  },
  {
    "item_name": "Flea",
    "category": "bug",
    "price": 70
  },
  {
    "item_name": "Fly",
    "category": "bug",
    "price": 60
  },
  {
    "item_name": "Giant Cicada",
    "category": "bug",
    "price": 500
  },
  {
    "item_name": "Giant Stag",
    "category": "bug",
    "price": 10000
  },
  {
    "item_name": "Giant Water Bug",
    "category": "bug",
    "price": 2000
  },
  {
    "item_name": "Giraffe Stag",
    "category": "bug",
    "price": "Unknown"
  },
  {
    "item_name": "Golden Stag",
    "category": "bug",
    "price": 12000
  },
  {
    "item_name": "Goliath Beetle",
    "category": "bug",
    "price": 6000
  },
  {
    "item_name": "Grasshopper",
    "category": "bug",
    "price": 160
  },
  {
    "item_name": "Great Purple Emperor",
    "category": "bug",
    "price": 2000
  },
  {
    "item_name": "Hermit Crab",
    "category": "bug",
    "price": 1000
  },
  {
    "item_name": "Honeybee",
    "category": "bug",
    "price": 200
  },
  {
    "item_name": "Horned Atlas",
    "category": "bug",
    "price": 8000
  },
  {
    "item_name": "Horned Dynastid",
    "category": "bug",
    "price": 1350
  },
  {
    "item_name": "Horned Elephant",
    "category": "bug",
    "price": 8000
  },
  {
    "item_name": "Horned Hercules",
    "category": "bug",
    "price": 12000
  },
  {
    "item_name": "Jewel Beetle",
    "category": "bug",
    "price": 2400
  },
  {
    "item_name": "Ladybug",
    "category": "bug",
    "price": 200
  },
  {
    "item_name": "Long Locust",
    "category": "bug",
    "price": 200
  },
  {
    "item_name": "Madagascan Sunset Moth",
    "category": "bug",
    "price": 2500
  },
  {
    "item_name": "Man-Faced Stink Bug",
    "category": "bug",
    "price": 1000
  },
  {
    "item_name": "Mantis",
    "category": "bug",
    "price": 430
  },
  {
    "item_name": "Migratory Locust",
    "category": "bug",
    "price": 200
  },
  {
    "item_name": "Miyama Stag",
    "category": "bug",
    "price": 1000
  },
  {
    "item_name": "Mole Cricket",
    "category": "bug",
    "price": 500
  },
  {
    "item_name": "Monarch Butterfly",
    "category": "bug",
    "price": 140
  },
  {
    "item_name": "Mosquito",
    "category": "bug",
    "price": 130
  },
  {
    "item_name": "Moth",
    "category": "bug",
    "price": 130
  },
  {
    "item_name": "Orchid Mantis",
    "category": "bug",
    "price": 2400
  },
  {
    "item_name": "Paper Kite Butterfly",
    "category": "bug",
    "price": 1000
  },
  {
    "item_name": "Peacock Butterfly",
    "category": "bug",
    "price": 2500
  },
  {
    "item_name": "Pill Bug",
    "category": "bug",
    "price": 250
  },
  {
    "item_name": "Pondskater",
    "category": "bug",
    "price": 130
  },
  {
    "item_name": "Queen Alexandra's Birdwing",
    "category": "bug",
    "price": 4000
  },
  {
    "item_name": "Rainbow Stag",
    "category": "bug",
    "price": 6000
  },
  {
    "item_name": "Rajah Brooke's Birdwing",
    "category": "bug",
    "price": 2500
  },
  {
    "item_name": "Red Dragonfly",
    "category": "bug",
    "price": 180
  },
  {
    "item_name": "Rice Grasshopper",
    "category": "bug",
    "price": 160
  },
  {
    "item_name": "Robust Cicada",
    "category": "bug",
    "price": 300
  },
  {
    "item_name": "Rosalia Batsei Beetle",
    "category": "bug",
    "price": 3000
  },
  {
    "item_name": "Saw Stag",
    "category": "bug",
    "price": 2000
  },
  {
    "item_name": "Scarab Beetle",
    "category": "bug",
    "price": 6000
  },
  {
    "item_name": "Scorpion",
    "category": "bug",
    "price": 8000
  },
  {
    "item_name": "Snail",
    "category": "bug",
    "price": 250
  },
  {
    "item_name": "Spider",
    "category": "bug",
    "price": 600
  },
  {
    "item_name": "Stinkbug",
    "category": "bug",
    "price": 120
  },
  {
    "item_name": "Tarantula",
    "category": "bug",
    "price": 8000
  },
  {
    "item_name": "Tiger Beetle",
    "category": "bug",
    "price": 1500
  },
  {
    "item_name": "Tiger Butterfly",
    "category": "bug",
    "price": 240
  },
  {
    "item_name": "Violin Beetle",
    "category": "bug",
    "price": 450
  },
  {
    "item_name": "Walker Cicada",
    "category": "bug",
    "price": 400
  },
  {
    "item_name": "Walker Leaf",
    "category": "bug",
    "price": 600
  },
  {
    "item_name": "Walking Stick",
    "category": "bug",
    "price": 600
  },
  {
    "item_name": "Wasp",
    "category": "bug",
    "price": 2500
  },
  {
    "item_name": "Wharf Roach",
    "category": "bug",
    "price": 200
  },
  {
    "item_name": "Yellow Butterfly",
    "category": "bug",
    "price": 160
  },
  {
    "item_name": "Conch",
    "category": "shell",
    "price": 700
  },
  {
    "item_name": "Coral",
    "category": "shell",
    "price": 250
  },
  {
    "item_name": "Cowrie",
    "category": "shell",
    "price": 60
  },
  {
    "item_name": "Giant Clam",
    "category": "shell",
    "price": 450
  },
  {
    "item_name": "Manila Clam",
    "category": "shell",
    "price": 100
  },
  {
    "item_name": "Oyster Shell",
    "category": "shell",
    "price": 450
  },
  {
    "item_name": "Pearl Oyster",
    "category": "shell",
    "price": 1200
  },
  {
    "item_name": "Porceletta",
    "category": "shell",
    "price": 30
  },
  {
    "item_name": "Sand Dollar",
    "category": "shell",
    "price": 120
  },
  {
    "item_name": "Sea Snail",
    "category": "shell",
    "price": 180
  },
  {
    "item_name": "Scallop Shell",
    "category": "shell",
    "price": 600
  },
  {
    "item_name": "Venus Comb",
    "category": "shell",
    "price": 150
  },
  {
    "item_name": "White Scallop",
    "category": "shell",
    "price": 450
  },
];

items.forEach(function(obj) {
    db.collection("items").doc(String(obj.item_name.toLowerCase())).set(obj)
});
