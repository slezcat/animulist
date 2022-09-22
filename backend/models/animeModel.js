const mongoose = require("mongoose");

const animeSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    rating:{
      type:Number
    },
    episodes: {
      type: String,
    },
    progress: {
      type: Number,
    },
    animeId: {
      type: String,
      required: [true, "Anime id field required!"],
    },
    title: {
      type: String,
      required: [true, "Title field required!"],
    },
    listStatus: {
      type: String,
      required: [true, "List status field required!"],
    },
    animeStatus: {
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
