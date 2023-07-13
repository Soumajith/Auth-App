const express = require("express");
require("dotenv").config();
const dbconnect = require("./config/database");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4000;

dbconnect();

const user = require("./routes/user");
app.use("/api/v1/", user);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});
