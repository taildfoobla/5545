const express = require('express')
const router = express.Router()

const tokenController= require('../controllers/TokenController')

router.get("/",tokenController.firtTime)
router.get("/tokens",tokenController.getTokens)
router.get("/token/:id",tokenController.getToken)
router.post("/tokens",tokenController.postToken)
router.put("/token/:id",tokenController.updateToken)
router.delete("/token/:id",tokenController.deleteToken)

module.exports=router;