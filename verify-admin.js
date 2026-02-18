const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config({ path: ".env.local" });

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error("No MONGODB_URI found in .env.local");
  process.exit(1);
}

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: String,
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

async function checkUser() {
  console.log("Connecting to DB...");
  try {
    await mongoose.connect(uri);
    console.log("Connected.");

    // Check if user exists
    const admin = await User.findOne({ email: "admin@betopiagroup.com" });

    if (admin) {
      console.log("Found admin user:");
      console.log("ID:", admin._id);
      console.log("Email:", admin.email);
      console.log("Role:", admin.role);
      console.log("Password Hash:", admin.password);

      // Test password
      const passwordToTest = "admin123";
      const isMatch = await bcrypt.compare(passwordToTest, admin.password);
      console.log(
        `Testing password '${passwordToTest}': ${isMatch ? "MATCH (Valid)" : "NO MATCH (Invalid)"}`,
      );

      if (!isMatch) {
        console.log("Updating password to 'admin123'...");
        const newHash = await bcrypt.hash(passwordToTest, 10);
        admin.password = newHash;
        await admin.save();
        console.log("Password updated successfully.");
      }
    } else {
      console.log("User 'admin@betopiagroup.com' NOT FOUND.");
      console.log("Creating user now...");
      const hashedPassword = await bcrypt.hash("admin123", 10);
      await User.create({
        email: "admin@betopiagroup.com",
        password: hashedPassword,
        role: "admin",
      });
      console.log("User created successfully.");
    }
  } catch (e) {
    console.error(e);
  } finally {
    await mongoose.disconnect();
  }
}

checkUser();
