const mongoose = require('mongoose');

const connectDatabase = () => {
  const uri = `${process.env.MONGO_URI}/${process.env.MONGO_DBNAME}`;
  console.log("Connecting to MongoDB with URI:", uri);

  if (!process.env.MONGO_URI || !process.env.MONGO_DBNAME) {
    console.error("MONGO_URI or MONGO_DBNAME is undefined!");
    process.exit(1);
  }

  mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => {
    console.error("Database connection failed:", err);
    process.exit(1); // stop server if DB not connected
  });}
module.exports = connectDatabase;