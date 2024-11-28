var resultModel = require("../models/resultModel");

function puxar(req, res) {

    var idUsuario = req.params.idUsuario;

    console.log(   'estou no puxar ')

    resultModel.puxar()
    .then(function(resultado){

        if(resultado.length > 0) {
            res.status(200).json(resultado)
        }else {
            res.status(204).send("não encontrado")
        }
    }).catch(err=>{
        res.status(500).send(err)
    })
}

function totalUsuarios(req, res) {
    console.log(   'estou na função total usuarios ')

    resultModel.totalUsuarios()
    .then(function(resultado){

        if(resultado.length > 0) {
            res.status(200).json(resultado)
        }else {
            res.status(204).send("não encontrado")
        }
    }).catch(err=>{
        res.status(500).send(err)
    })
}

function tentQuiz(req, res) {
    console.log(   'estou na função tentativa quiz ')

    resultModel.tentQuiz()
    .then(function(resultado){

        if(resultado.length > 0) {
            res.status(200).json(resultado)
        }else {
            res.status(204).send("não encontrado")
        }
    }).catch(err=>{
        res.status(500).send(err)
    })
}

function acertosUser(req, res) {
    console.log(   'estou na função acertoUser ')

    resultModel.acertosUser()
    .then(function(resultado){
        console.log("lalallal" + resultado)
        if(resultado.length > 0) {
            res.status(200).json(resultado)
        }else {
            res.status(204).send("não encontrado")
        }
    }).catch(err=>{
        res.status(500).send(err)
    })
}

function pontUser(req, res) {
    console.log(   'estou na função pontUser ')

    resultModel.pontUser()
    .then(function(resultado){
        console.log("lalallal" + resultado)
        if(resultado.length > 0) {
            res.status(200).json(resultado)
        }else {
            res.status(204).send("não encontrado")
        }
    }).catch(err=>{
        res.status(500).send(err)
    })
}

module.exports = {puxar,totalUsuarios,tentQuiz,acertosUser,pontUser}