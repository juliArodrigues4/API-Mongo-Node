const express = require('express');
const mongoose = require('mongoose');

//  criar app

const app = express();

//  configuração da API para ler em json

app.use(express.urlencoded({
    extended: true,
}))
app.use(express.json());

// conexao com o banco de dados

let bd = 'mongodb://localhost:27017/';

mongoose.connect(bd)
.then(()=>{
    console.log('o banco tá conectado pai');
    app.get('/', (rep, res)=>{
        res.json({message: 'oi mundo'});
    })
}).catch((error)=>{
    console.log('não conectou ;(');
})

//  declarar a API como pública

app.listen(3000)