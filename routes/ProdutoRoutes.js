const router = require('express').Router()

const Produto = require('../models/Produto.js')

//POST - criação de produto
router.post('/', async (req, res) => {

    const {nomeProduto, email, quantidade, fabricante} = req.body

    if(!nomeProduto|| !quantidade || !fabricante) {
        res.status(422).json({error: 'É necessário informar os dados por JSON!'})
        return
    }

    const produto = {
        nomeProduto,
        quantidade,
        fabricante,
    }

    try {

     await Produto.create(produto)

    res.status(201).json({message: "Produto inserido com sucesso"})

    } catch(error) {
        console.log(error)
        res.status(500).json({error: "Ocorreu um erro ao criar o produto"})
    }
})

//GET - leitura de todos os produto
router.get('/', async (req, res) => {

    try {

        const produto = await Produto.find()

        res.status(200).json(produto)

    } catch(error) {
        res.status(500).json({error: "Não foi possível realizar a consulta."})
    }

})

//GET - leitura de um único produto a partir do id
router.get('/:id', async (req, res) => {

    const id = req.params.id

    try {
        const produto = await Produto.findOne({_id: id})

        if(!produto) {
            res.status(422).json({message: 'O produto não foi encontrado, por favor verifique o ID e tente novamente.'})
            return
        }

        res.status(200).json(produto)

    } catch(error) {
        res.status(500).json({error: "Não foi possível realizar a consulta."})
    }

})

//PUT - atualizar dados do produto a partir do ID
router.put('/:id', async (req, res) => {

    const id = req.params.id

    const { nomeProduto, quantidade, fabricante } = req.body

    const produto = {
        nomeProduto, 
        quantidade,
        fabricante,
    }

    try {

        const produtoAtualizado = await Produto.updateOne({_id: id}, produto)

        res.status(200).json(produto)

    } catch(error) {
        res.status(500).json({ error: error })
    }

})

//DELETE - deletar produto a partir do ID

router.delete('/:id', async (req, res) => {
    
    const id = req.params.id

    const produto = await Produto.findOne({_id: id})

        if(!produto) {
            res.status(422).json({message: 'O produto não foi encontrado, por favor verifique o ID e tente novamente.'})
            return
        }

    try {
        
        await Produto.deleteOne({_id: id})

        res.status(200).json({message: 'Produto removido com sucesso'})

    } catch (error) {
        res.status(500).json({ error: error })
        }
    
    })

module.exports = router