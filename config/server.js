//Primeira etapa iniciar o npm
//npm init
//Segunda etapa iniciar o git
//git init
//Terceira etapa o npm express
//npm install express
//Quarta etapa instalar o nodemon para nao ter que matar o servidor e reiniciar toda vez que atualizar algo.
//npm install -g nodemon
//Quinta etapa instalar o ejs que faz a reinderização dos arquivos HTML
//npm install ejs
const express = require('express')
const app = express ()

//define o motor de views como sendo o EJS
app.set('view engine','ejs')

//configurar o caminho das views
app.set('views','./App/Views')

//Configuração dos arquivos estáticos
app.use(express.static('./App/Public'))

module.exports = app