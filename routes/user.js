const express = require("express");

const router = express.Router();

// import controller
const { signup, login } = require("../controllers/auth");
const { auth, isStudent, isAdmin } = require("../middleware/auth");

//map
router.post("/signup", signup);
router.post("/login", login);

router.get("/test", auth, (req, res) => {
  res.json({
    success: true,
    message: "Successfully tested",
  });
});

//for student
router.get("/student", auth, isStudent, (req, res) => {
  res.json({
    success: true,
    message: "Logged in as student",
  });
});

router.get("/admin", auth, isAdmin, (req, res) => {
  res.json({
    success: true,
    message: "Logged in as admin",
  });
});

//export
module.exports = router;
