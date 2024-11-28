const { pontUser } = require("../controllers/resultController")
var database = require("../database/config")

function puxar() {
    console.log("Estou na model do result")
    
    var instrucaoSQL = `select min(pontos) as min, max(pontos) as max, avg(pontos) as media from quiz `
    return database.executar(instrucaoSQL)
}

function totalUsuarios() {
    console.log("Estou na model do result")
    
    var instrucaoSQL = `select count(*)  as qtdUsuarios from usuario `
    return database.executar(instrucaoSQL)
}

function tentQuiz() {
    console.log("Estou na model do tentquiz")
    
    var instrucaoSQL = `select count(*)  as tentQuiz from usuario `
    return database.executar(instrucaoSQL)
}

function acertosUser() {
    console.log("Estou na model do acertosUser")

    var instrucaoSQL = `select usuario.nome as nomeUsuario, max(quiz.pontos) as Pontos from usuario join quiz on usuario.id = quiz.fkUsuario group by usuario.nome`
    return database.executar(instrucaoSQL)
}

function pontuUser() {
    console.log("Estou na model do acertosUser")

    var instrucaoSQL = `select usuario.nome as nomeUsuario from usuario join quiz on usuario.id = quiz.fkUsuario where quiz.pontos = (select max(pontos) from quiz);`
    return database.executar(instrucaoSQL)
}

module.exports = {puxar,totalUsuarios,tentQuiz,acertosUser,pontuUser}