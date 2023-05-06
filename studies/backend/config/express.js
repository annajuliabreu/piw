// Importando módulo express (Padrão CommomJS)
const express = require('express');

// Exportando módulo (Padrão CommomJS)
module.exports = function(){
    let app = express();
    // Definindo variável da aplicação
    app.set("port", 8393);
    app.use(express.static('./public'));
    return app;
}