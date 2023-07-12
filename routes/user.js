const express = require("express");

const router = express.Router();

// import controller
const { login, signup } = require("../controllers/auth");

//map
router.post("/signup", signup);
// router.get("/login", login);

//export
module.exports = router;
