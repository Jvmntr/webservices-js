const mongoose = require('mongoose')

const Fornecedor = mongoose.model('Fornecedor', {
    nome:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    CNPJ: {
        type: Number,
        required: true,
    },
    localidade: {
        type: String,
        required: true,
    },
    dtCriacao: {
        type: Date,
        default: Date.now
    }
})

module.exports = Fornecedor