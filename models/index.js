const mongoose = require("mongoose");

module.exports.connect = uri => {
  // plug in the promise library:
  mongoose.Promise = global.Promise;
  mongoose.connect(process.env.MONGODB_URI || uri, {useMongoClient: true });

  mongoose.connection.on("error", err => {
    console.error(`Mongoose connection error: ${err}`);
    process.exit(1);
  });

  // load models
  require("./user");
};
