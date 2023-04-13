const router = require('express').Router()

const Usuario = require('../models/Usuario.js')

//POST - criação de usuário
router.post('/', async (req, res) => {

    const {nome, email, senha} = req.body

    if(!nome || !email || !senha) {
        res.status(422).json({error: 'É necessário informar os dados por JSON!'})
        return
    }

    const usuario = {
        nome,
        email,
        senha,
    }

    try {

     await Usuario.create(usuario)

    res.status(201).json({message: "Usuário inserido com sucesso"})

    } catch(error) {
        console.log(error)
        res.status(500).json({error: "Ocorreu um erro ao criar o usuário"})
    }
})

//GET - leitura de todos os usuários
router.get('/', async (req, res) => {

    try {

        const usuarios = await Usuario.find()

        res.status(200).json(usuarios)

    } catch(error) {
        res.status(500).json({error: "Não foi possível realizar a consulta."})
    }

})

//GET - leitura de um único usuário a partir do id
router.get('/:id', async (req, res) => {

    const id = req.params.id

    if(!usuario) {
        res.status(422).json({message: 'O usuário não foi encontrado, por favor verifique o ID e tente novamente.'})
        return
    }

    try {
        const usuario = await Usuario.findOne({_id: id})

        res.status(200).json(usuario)

    } catch(error) {
        res.status(500).json({error: "Não foi possível realizar a consulta."})
    }

})

//PUT - atualizar dados do usuário a partir do ID
router.put('/:id', async (req, res) => {

    const id = req.params.id

    const { nome, email, senha } = req.body

    const usuario = {
        nome, 
        email,
        senha,
    }

    try {

        const usuarioAtualizado = await Usuario.updateOne({_id: id}, usuario)

        res.status(200).json(usuario)

    } catch(error) {
        res.status(500).json({ error: error })
    }

})

//DELETE - deletar usuário a partir do ID

router.delete('/:id', async (req, res) => {
    
    const id = req.params.id

    const usuario = await Usuario.findOne({_id: id})

        if(!usuario) {
            res.status(422).json({message: 'O usuário não foi encontrado, por favor verifique o ID e tente novamente.'})
            return
        }

    try {
        
        await Usuario.deleteOne({_id: id})

        res.status(200).json({message: 'Usuário removido com sucesso'})

    } catch (error) {
        res.status(500).json({ error: error })
        }
    
    })

module.exports = router