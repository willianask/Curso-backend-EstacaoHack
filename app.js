const app = require ('./config/server')
const noticias = require ('./mockup')

// Rota home
app.get('/', function(req,res){
    //O EJS disponibiliza o render para usar nas respostas das requisições.
    res.render('Home/index', {noticias: noticias.slice(0,3)})
        
})
//Rota Noticias
app.get('/noticias', function(req,res){
    res.render('Noticias/noticias', {noticias: noticias})})

//Rota Noticia
app.get('/noticia', function(req,res){
    //Recupera id noticia por get
    const id = req.query.id
    res.render('Noticias/noticia',{noticia:noticias[id]})
})
//Rota Admin
app.get('/admin', function(req,res){
    res.render('Admin/form_add_noticias')
})

app.listen(3000, ()=>{
    console.log('Servidor rodando com express')
})