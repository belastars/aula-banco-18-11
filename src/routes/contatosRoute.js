const express = require("express")
const router = express.Router()
const bodyParser = require("body-parser")
const controller = require("../controller/contatosController")

router.get("/", controller.getAll)
router.get("/id/:id", controller.getById)
router.get("/nome/:nome", controller.getByName)
router.delete("/deletar/:id", controller.deletarById)
router.post("/criar", bodyParser.json(), controller.pushAdd)

module.exports = router
