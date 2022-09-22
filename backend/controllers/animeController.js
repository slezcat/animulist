const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Anime = require("../models/animeModel");

//@desc Get anime list
//@route GET /api/animes
//@access Private
const getAnimes = async (req, res) => {
  const animes = await Anime.find({ user: req.user.id });

  res.status(200).json(animes);
};

//@desc Set anime to list
//@route POST /api/animes
//@access Private
const setAnime = asyncHandler(async (req, res) => {
  const { title, animeId, animeStatus, image, listStatus, progress, episodes,rating } =
    req.body;

  if (!title || !animeId ) {
    res.status(400);
    throw new Error("Anime field not provided!");
  }

  const anime = await Anime.create({
    rating,
    listStatus,
    progress,
    episodes,
    title,
    animeId,
    animeStatus,
    image,
    user: req.user.id,
  });

  res.status(200).json(anime);
});

//@desc Update anime from list
//@route PUT /api/animes
//@access Private
const updateAnime = asyncHandler(async (req, res) => {
  const anime = await Anime.findById(req.params.id);

  if (!anime) {
    res.status(400);
    throw new Error("Anime not found in your list");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged user matches the user's animelist
  if (anime.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedAnime = await Anime.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedAnime);
});

//@desc Delete anime from list
//@route DELETE /api/animes
//@access Private
const deleteAnime = asyncHandler(async (req, res) => {
  const anime = await Anime.findById(req.params.id);

  if (!anime) {
    res.status(400);
    throw new Error("Anime not found in your list");
  }

  //check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged user matches the user's animelist
  if (anime.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await anime.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getAnimes,
  setAnime,
  updateAnime,
  deleteAnime,
};
