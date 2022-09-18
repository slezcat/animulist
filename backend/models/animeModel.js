const mongoose = require("mongoose");

const animeSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: [true, "please add anime field"],
    },
    status: {
      type: String,
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Anime", animeSchema);
