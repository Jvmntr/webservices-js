const mongoose = require('mongoose')

const Produto = mongoose.model('Produto', {
    nomeProduto:{
        type: String,
        required: true,
    },
    quantidade:{
        type: Number,
        required: true,
    },
    fabricante: {
        type: String,
        required: true,
    },
    dtCriacao: {
        type: Date,
        default: Date.now
    }
})

module.exports = Produto