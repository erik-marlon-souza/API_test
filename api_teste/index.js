//connfiguração inicial
const mongoose = require('mongoose')
const express = require('express')
const app = express()

const Pessoas = require('./models/Pessoas')
//forma de ler json => utilizar middlewares
app.use(
    express.urlencoded({
        extended: true,
    }),
)
    app.use(express.json())
//rota para inserir na base de dados
 const pessoasRotas = require('./routes/pessoasRotas')

 app.use('/pessoas' , pessoasRotas)
// rota inicial / endpoint
app.get('/',(req,res)=>{
    //mostrar requisisição
 res.json({message: 'Oi express'})
 


}
)
//app.listen(3000)

const DB_USER = 'Erik'
const DB_PASSWORD =encodeURIComponent('7xMxMnto2msgzvkq')

mongoose
.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.xkalg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
)
.then(()=>{
    console.log('Conectamos com o DB XD')
    app.listen(3000);
})

.catch((err)=>{
    console.log(err)
})

