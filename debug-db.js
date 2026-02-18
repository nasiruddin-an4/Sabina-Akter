const mongoose = require("mongoose");
require("dotenv").config({ path: ".env.local" });

const uri = process.env.MONGODB_URI;

if (!uri) {
  process.exit(1);
}

const PageContentSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
  data: { type: mongoose.Schema.Types.Mixed, required: true },
});

const PageContent =
  mongoose.models.PageContent ||
  mongoose.model("PageContent", PageContentSchema);

async function checkContent() {
  try {
    await mongoose.connect(uri);

    const hero = await PageContent.findOne({ key: "hero" });
    console.log("--- CURRENT HERO DATA IN DB ---");
    if (hero) {
      console.log(JSON.stringify(hero.data, null, 2));
    } else {
      console.log("Heritage Key NOT FOUND");
    }
  } catch (e) {
    console.error(e);
  } finally {
    await mongoose.disconnect();
  }
}

checkContent();
