const express = require("express");
const { creategMessage, 
         getMessages,
         } = require("../controllers/messageController");

const router = express.Router();

router.post("/",creategMessage);

router.get("/:chatId", getMessages)

module.exports = router; 