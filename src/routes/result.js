var express = require("express");
var router = express.Router();
var resultController = require("../controllers/resultController")

router.get ("/puxar/", function(req, res) {
    resultController.puxar(req, res);
})

router.get ("/totalUsuarios/", function(req, res) {
    resultController.totalUsuarios(req, res);
})

router.get ("/tentQuiz/", function(req, res) {
    resultController.tentQuiz(req, res);
})

router.get ("/acertosUser/", function(req, res) {
    resultController.acertosUser(req, res);
})

router.get ("/pontUser/", function(req, res) {
    resultController.pontUser(req, res);
})
module.exports = router;