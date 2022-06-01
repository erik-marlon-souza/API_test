const router = require('express').Router()

const Pessoas = require('../models/Pessoas')



router.post('/pessoas',async(req,res)=>{
  
    const {nome,salario,aprovado}=req.body
    if(!nome){
        res.status(422).json({error: 'O nome é obrigatorio XD'})
    }

    const pessoas ={
        nome,
        salario,
        aprovado
        }
        try{
            await Pessoas.create(pessoas)
            res.status(201).json({message: 'Pessoa, Sucesso :)'})


        }catch(error){
            res.status(500).json({error: error})

        }
    
})
module.exports = router
