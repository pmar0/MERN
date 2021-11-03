const Product = require('../models/productmanager.model');

module.exports = {
    findAllProducts: (req, res) => {
        Product.find()
            .then(allProducts => res.json({ products: allProducts }))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    },
    
    findOneProduct: (req, res) => {
        Product.findOne({ _id: req.params.id })
            .then(oneProduct => res.json({ product: oneProduct }))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    },
    
    createNewProduct: (req, res) => {
        Product.create(req.body)
            .then(newProduct => res.json({ product: newProduct }))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    },
    
    updateExistingProduct: (req, res) => {
        Product.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedProduct => res.json({ product: updatedProduct }))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    },
    
    deleteExistingProduct: (req, res) => {
        Product.deleteOne({ _id: req.params.id })
            .then(result => res.json({ result: result }))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    }
}