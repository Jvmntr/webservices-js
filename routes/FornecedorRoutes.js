const router = require('express').Router()

const Fornecedor = require('../models/Fornecedor.js')

//POST - criação de fornecedor
router.post('/', async (req, res) => {

    const {nome, email, CNPJ, localidade} = req.body

    if(!nome || !email || !CNPJ || !localidade) {
        res.status(422).json({error: 'É necessário informar os dados por JSON!'})
        return
    }

    const fornecedor = {
        nome,
        email,
        CNPJ,
        localidade,
    }

    try {

     await Fornecedor.create(fornecedor)

    res.status(201).json({message: "Fornecedor inserido com sucesso"})

    } catch(error) {
        console.log(error)
        res.status(500).json({error: "Ocorreu um erro ao criar o Fornecedor"})
    }
})

//GET - leitura de todos os fornecedores
router.get('/', async (req, res) => {

    try {

        const fornecedores = await Fornecedor.find()

        res.status(200).json(fornecedores)

    } catch(error) {
        res.status(500).json({error: "Não foi possível realizar a consulta."})
    }

})

//GET - leitura de um único fornecedor a partir do id
router.get('/:id', async (req, res) => {

    const id = req.params.id

    try {
        const fornecedor = await Fornecedor.findOne({_id: id})

        if(!fornecedor) {
            res.status(422).json({message: 'O fornecedor não foi encontrado, por favor verifique o ID e tente novamente.'})
            return
        }

        res.status(200).json(fornecedor)

    } catch(error) {
        res.status(500).json({error: "Não foi possível realizar a consulta."})
    }

})

//PUT - atualizar dados do fornecedor a partir do ID
router.put('/:id', async (req, res) => {

    const id = req.params.id

    const { nome, email, CNPJ, localidade } = req.body

    const fornecedor = {
        nome, 
        email,
        CNPJ,
        localidade,
    }

    try {

        const fornecedorAtualizado = await Fornecedor.updateOne({_id: id}, fornecedor)

        res.status(200).json(fornecedor)

    } catch(error) {
        res.status(500).json({ error: error })
    }

})

//DELETE - deletar fornecedor a partir do ID

router.delete('/:id', async (req, res) => {
    
    const id = req.params.id

    const fornecedor = await Fornecedor.findOne({_id: id})

        if(!fornecedor) {
            res.status(422).json({message: 'O fornecedor não foi encontrado, por favor verifique o ID e tente novamente.'})
            return
        }

    try {
        
        await Fornecedor.deleteOne({_id: id})

        res.status(200).json({message: 'Fornecedor removido com sucesso'})

    } catch (error) {
        res.status(500).json({ error: error })
        }
    
    })

module.exports = router