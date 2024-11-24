var publicarModel = require("../models/publicarModel");

function publicar(req, res) {
    var pontos = req.body.pontos;
    var idUsuario = req.params.idUsuario;

    if (pontos == undefined) {
        res.status(400).send("O título está indefinido!");
    } else if (idUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else {
        publicarModel.publicar(pontos, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    publicar
}