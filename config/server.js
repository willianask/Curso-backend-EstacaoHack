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
//npm install pg
//npm install express-session
//deploy:
//sudo snap install --classic heroku
//heroku login
//autentica no navegador

const express = require('express')
const app = express ()

const session = require('express-session')

//define o motor de views como sendo o EJS
app.set('view engine','ejs')

//configurar o caminho das views
app.set('views','./app/views')

//Configuração dos arquivos estáticos
app.use(express.static('./app/public'))

//configura o bodyparse do express
app.use(express.urlencoded({extended: true}))

//configuração do express-session
app.use(session({
    secret: 'UW9u{Zw/K!mY)#S/', // chave de segurança usada na assinatura dos identificadores da sessão
    resave: false, //otimiza para que a sessão não seja salva novamente
    saveUninitialized: false, //otimiza o uso do armazenamento no servidor
}))

module.exports = app