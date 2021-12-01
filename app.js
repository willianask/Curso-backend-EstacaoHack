const app = require ('./config/server')
const noticias = require ('./mockup')
const db = require ('./config/dbConnection')


// Rota home
app.get('/', function(req,res){
    db.query('SELECT * FROM noticias ORDER BY id_noticia DESC LIMIT 3', function(error,result){
        //console.log(result)
    //O EJS disponibiliza o render para usar nas respostas das requisições.
    res.render('home/index', {noticias: result.rows})
    })
    
        
})

//Rota Noticias
app.get('/noticias', function(req,res){
    db.query('SELECT * FROM noticias ORDER BY id_noticia DESC', function(error,result){
        res.render('noticias/noticias', {noticias: result.rows})
    })
})

//Rota Noticia
app.get('/noticia', function(req,res){
    //Recupera id noticia por get
    const id = req.query.id
    db.query('SELECT * FROM noticias WHERE id_noticia = $1', [id], function(error,result){
        res.render('noticias/noticia',{noticia:result.rows[0]})
    })
    
})
//Rota Admin
app.get('/admin', function(req,res){
    if(req.session.autorizado){
        res.render('admin/form_add_noticias',{autorizado: req.session.autorizado})
    }else{
        res.render('admin/login')
    }
    
})
//Rota responsável por salvar as notícias
app.post('/admin/salvar-noticia', function(req, res){
    //recuperação das informações passadas por POST
    let {titulo, conteudo} = req.body

    db.query('INSERT INTO noticias(titulo, conteudo) VALUES($1, $2)',[titulo, conteudo], function(error, result){
        res.redirect('/noticias')
    })
})
// rota responsável por autenticar o usuário
app.post('/admin/autenticar', function(req, res){
    const {usuario, senha} = req.body

    if(usuario == 'root' && senha == 'cellep1234'){
        req.session.autorizado = true
    }
    res.redirect('/admin')
})
//Rota sair
app.get('/admin/sair', function(req, res){
    req.session.destroy((err) => {})
    res.redirect('/admin')
})

app.listen(process.env.PORT || 3000, ()=>{
    console.log('Servidor rodando com express')
})