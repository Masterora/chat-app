const mongoose = require("mongoose");

function connection() {
  const mongoURI = "mongodb://localhost:27017/chat";
  mongoose
    .connect(mongoURI)
    .then(() => console.log("connected"))
    .catch((err) => console.log(err));
}

module.exports = connection;
