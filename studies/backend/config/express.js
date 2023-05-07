// Importando módulo express (Padrão CommomJS)
const express = require('express');
const routerAlunos = require("../app/routes/alunos.js");
const bodyParser = require('body-parser');

// Exportando módulo (Padrão CommomJS)
module.exports = function(){
    let app = express();

    // Definindo variável da aplicação
    app.set("port", 8393);

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use(express.static('./public'));
    routerAlunos(app);

    return app;
}