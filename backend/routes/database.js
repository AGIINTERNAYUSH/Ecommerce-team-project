const router = require('express').Router();
let Product = require('../models/product.model');
let Order = require('../models/order.model');

router.route('/getProducts').get((req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/getOrders').get((req,res) => {
    Order.find()
        .then(orders => res.json(orders))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/addOrder').post((req, res) => {
    const customer_name = req.body.customer_name;
    const product_name = req.body.product_name;
    const color = req.body.color; 
    const size = req.body.size;
    const quantity = req.body.quantity; 
    const price = req.body.price; 
    const image = req.body.image;
    const delivery_address = req.body.delivery_address;

    const newOrder = new Order({customer_name, product_name, color, size, quantity, price, image, delivery_address});

    newOrder.save()
        .then(() => res.json('Order added!'));
});
router.route('/addProduct').post((req, res) => {
    const company_name = req.body.company_name;
    const product_name = req.body.product_name;
    const color = req.body.color;
    const size = req.body.size;
    const description = req.body.description;
    const quantity = req.body.quantity;
    const price = req.body.price;
    const image = req.body.price;

    const newProduct = new Product({company_name, product_name, color, size, description, quantity, price, image});

    newProduct.save()
        .then(() => res.json('Product added!'))
        .catch(err => res.status(400).jason('Error: ' + err));
});

module.exports = router;