const db = require("../config/connection");
const { Hikes, Peaks, Users } = require("../models");
const hikeSeeds = require("./hike-seed.json");
const peakSeeds = require("./peak-seed.json");
const userSeeds = require("./user-seed.json");

db.once("open", async () => {
  try {
    await cleanDB("Hike", "hike");

    await cleanDB("Peak", "peak");

    await cleanDB("User", "user");

    await Hikes.create(hikeSeeds);

    await Peaks.create(peakSeeds);

    await Users.create(userSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("You are Seeded!");
  process.exit(0);
});
