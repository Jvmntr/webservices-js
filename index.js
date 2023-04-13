const express = require('express');
require("dotenv").config();
const mongoose = require('mongoose');
const app = express()

const PORT = process.env.PORT || 3000

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

//rotas da API 

const UsuarioRoutes = require('./routes/UsuarioRoutes.js')
const FornecedorRoutes = require('./routes/FornecedorRoutes.js')
const ProdutoRoutes = require('./routes/ProdutoRoutes.js')

app.use('/usuario', UsuarioRoutes)
app.use('/fornecedor', FornecedorRoutes)
app.use('/produto', ProdutoRoutes)

//rota inicial do endpoint
app.get('/', (req, res) => {
    res.status(200).send({
        message: "Olá, para realizar os testes, por favor acesse: https://github.com/Jvmntr/webservices-js e siga o cenário de testes (Heroku)",
    })
    console.log('[SERVER] Iniciando aplicação.')
})

const DB_USER= process.env.DB_USER
const DB_PASSWORD= process.env.DB_PASSWORD

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apifiap.h16ysrr.mongodb.net/test`
)
.then(() => {
    console.log('[SERVER] Conectado ao banco.')
    app.listen(PORT)
})
.catch((err) => console.log(err))
