const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}`);
  } catch (e) {
    process.exit(1);
  }
};

module.exports = connectDB;
