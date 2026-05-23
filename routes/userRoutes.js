const express = require("express");
const router = express.Router();

const { registerUser } = require("../controllers/userController");

router.get("/", (req, res) => {
  res.json({
    message: "OneCreativity user route is working",
  });
});

router.post("/register", registerUser);

module.exports = router;