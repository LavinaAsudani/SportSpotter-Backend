const express = require("express");
const app = express();
const DbConnect = require("./config/database");
require("dotenv").config();

const PORT = process.env.PORT;

DbConnect();

app.use(express.json());

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});