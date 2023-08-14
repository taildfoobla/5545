const express = require('express')
const router = express.Router()

const scoreController= require('../controllers/ScoreController')

router.get("/:symbol",scoreController.getScoreByName)
router.get("/",scoreController.getScore)

module.exports=router;