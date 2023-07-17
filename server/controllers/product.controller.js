//we need the models for our controllers

const Product = require('../models/product.model')

module.exports = {
    allProducts: (req,res) => {
        Product.find()
            .then(products => {
                res.json(products)
            })
            .catch(err=>{
                res.status(400).json(err)
            })
    },
    oneProduct: (req,res) => {
        Product.findOne({_id: req.params.id})
            .then(product => {
                res.json(product)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    },
    addProduct: (req,res) => {
        Product.create(req.body)
            .then(newProduct => {
                res.json(newProduct)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },
    updateProduct: (req,res) => {
        Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
            .then(product => {
                res.json(product)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },
    deleteProduct: (req,res) => {
        Product.deleteOne({_id: req.params.id})
            .then(product=>{
                res.json(product)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }
}