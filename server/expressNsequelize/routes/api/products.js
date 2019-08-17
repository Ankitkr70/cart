const route = require('express').Router();
console.log("into route to products")
const Product = require('../../db').Product;

route.get('/', (req, res) => {
    //get all products

    Product.findAll()
        .then((products) => {
            console.log("products list hit")
            res.status(200).send(products)
        })
        .catch((err) => {
            res.status(500).send({
                error: "could not retrieve products"
            })
        })
})

route.post('/', (req, res) => {
    //add a new product
    if (isNaN(req.body.price)) {
        return res.status(403).send({
            error: "Price is not valid number"
        })
    }
 
    Product.create({
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        price: parseInt(req.body.price)
    }).then((product) => {
        res.status(201).send(product)
    }).catch((error) => {
        res.status(501).send({
            error: "error adding product"
        })
    })
})


exports = module.exports = route