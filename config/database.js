const mongoose = require('mongoose');

const connectDatabase = () => {
  const uri = `${process.env.MONGO_URI}/${process.env.MONGO_DBNAME}`;
  console.log("Connecting to MongoDB with URI:", uri);

  if (!process.env.MONGO_URI || !process.env.MONGO_DBNAME) {
    console.error("MONGO_URI or MONGO_DBNAME is undefined!");
    process.exit(1);
  }

  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log("Database connected"))
    .catch(err => console.log("Database connection failed", err));
};

module.exports = connectDatabase;