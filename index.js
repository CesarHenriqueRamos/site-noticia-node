const express = require('express');
const path  = require('path');
const app = express();
const BodyParser = require('body-parser');
    //configuração
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
    app.use('/public',express.static(path.join(__dirname,'public')));
    app.set('views',path.join(__dirname,'/views'));
    app.use(BodyParser.json());
    app.use(BodyParser.urlencoded({
        extended:true
    }));

    //rotas
    app.get('/',(req,res)=>{
        if(req.query.busca == null){
            res.send("Home");
        }else{
            res.send("pesquisa");
        }

    })
    app.get('/:slug',(req,res)=>{

    })

app.listen(3000,(req,res)=>{
    console.log('Servidor Rodando');
})