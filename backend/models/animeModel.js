const mongoose = require("mongoose");

const animeSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    animeId: {
      type: String,
      required: [true, "Anime id field required!"],
    },
    title: {
      type: String,
      required: [true, "Title field required!"],
    },
    status: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Anime", animeSchema);
