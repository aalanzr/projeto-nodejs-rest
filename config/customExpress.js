// Importando os módulos 
const express = require('express');
const consign = require('consign'); /* Módulo para agrupar todas as rotas criadas dentro do app => npm install consign */
const bodyParser = require('body-parser');

module.exports = () => {
    //Configurando o servidor do jeito que queremosss
    const app = express();

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    consign()
        .include('controllers')
        .into(app);

    return app;
}

