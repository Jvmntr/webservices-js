const mongoose = require('mongoose')

const Usuario = mongoose.model('Usuario', {
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
    senha: {
        type: String,
        required: true,
        select: false,
    },
    dtCriacao: {
        type: Date,
        default: Date.now
    }
})

module.exports = Usuario