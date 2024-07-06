const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  username: String,
  message: String,
  avatar: String,
  timestamp: { type: Date, default: Date.now },
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
