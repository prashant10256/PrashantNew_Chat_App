const express = require("express");
const {
  registerUser,
  loginUser,
  getUsers,
  findUsers,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/find/:userId", findUsers);
router.get("/", getUsers);

module.exports = router;
