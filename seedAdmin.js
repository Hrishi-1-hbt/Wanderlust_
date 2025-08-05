if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const mongoose = require("mongoose");
const User = require("./models/user.js");

const dbUrl = process.env.ATLASDB_URL;

async function createSingleAdminUser() {
    try {
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const existingAdmin = await User.findOne({ username: 'admin' });
        if (existingAdmin) {
            console.log("Deleting existing admin user...");
            await User.deleteOne({ username: 'admin' });
            console.log("Existing admin user deleted.");
        }

        const adminUser = new User({
            username: 'admin',
            email: 'admin@example.com',
            isAdmin: true
        });

        await User.register(adminUser, 'Admin@123');
        console.log("✅ New admin user created successfully!");
    } catch (error) {
        console.error("❌ Error creating admin user:", error);
    } finally {
        await mongoose.connection.close();
    }
}

createSingleAdminUser();

