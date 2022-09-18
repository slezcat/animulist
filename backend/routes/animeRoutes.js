const express = require("express")
const router = express.Router()
const {
    getAnimes,
    setAnime,
    deleteAnime,
    updateAnime
} = require('../controllers/animeController')
const {protect} = require("../middleware/authMiddleware")

router.route("/").get(protect,getAnimes).post(protect,setAnime)
router.route("/:id").delete(protect,deleteAnime).put(protect,updateAnime)

module.exports = router