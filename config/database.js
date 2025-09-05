const mongoose = require("mongoose");
require("dotenv").config();
const MONGODB_URL = process.env.MONGODB_URL;

const DbConnect = () => {
  mongoose
    .connect(MONGODB_URL)
    .then(() => {
      console.log("DB Connected Successfully");
    })
    .catch((error) => {
      console.log("Issue in Db Connection");
      console.log(error);
      process.exit(1);
    });
};

module.exports = DbConnect;