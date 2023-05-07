let alunos = [
    {id: 1, nome:"Anna", sobrenome:"Abreu", matricula:"123"},
    {id: 2, nome:"Leo", sobrenome:"Abreu", matricula:"321"},
    {id: 3, nome:"Joshua", sobrenome:"Abreu", matricula:"321"}
];

// /alunos?nome=Anna
module.exports.listarAlunos = function(req, res) {
    let alunos_retorno = alunos;
    if(req.query.nome){
        let nome = req.query.nome;
        alunos_retorno = alunos_retorno.filter(function(aluno){return aluno.nome == nome});
    }
    res.json(alunos_retorno);
}

module.exports.buscarAlunoPorId = function(req, res) {
    let id = req.params.id;
    let aluno = alunos.find(function(aluno){return aluno.id == id});
    
    if(aluno){
        res.json(aluno);
    }else{
        res.status(404).json({mensagem:"Aluno não encontrado"});
    }
}

module.exports.inserirAluno = function(req, res) {
    let aluno = req.body;
    alunos.push(aluno);
    res.status(201).json(aluno);
}

// aluno/1
module.exports.removerAluno = function(req, res) {
    let id = req.params.id;
    aluno = alunos.filter(function(aluno){return aluno.id != id});
    res.json({mensagem:"Aluno foi removido!"})

}