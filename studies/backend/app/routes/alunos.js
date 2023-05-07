const controller = require('../controllers/alunos.js');

module.exports = function(app){
    // GET/alunos
    app.get("/alunos", controller.listarAlunos);

    // GET/alunos?nome=Anna
    app.get("/alunos/:id", controller.buscarAlunoPorId);

    // POST/alunos
    app.post("/alunos", controller.inserirAluno);

    // DELETE/alunos/4
    app.delete("/alunos/:id", controller.removerAluno)
}