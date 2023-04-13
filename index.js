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

app.use('/usuario', UsuarioRoutes)

//rota inicial do endpoint
app.get('/', (req, res) => {
    res.json({ message: '[SERVER] Iniciado.'})
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
