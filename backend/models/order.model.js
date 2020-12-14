const mongoose = require('mongoose');

const Schema = mongoose.Schema

const orderSchema = new Schema({
    customer_name: {type: String, required: true},
    customer_number: {type: String, required: true},
    product_name: {type: String, required: true},
    color: {type: String, required: true}, 
    size: {type: String, required: true},
    quantity: {type: String, required: true}, 
    price: {type: Number, required: true}, 
    image: {type: String, required: true},
    delivery_address: {type: String, required: true},
    status: {type: String, required: true},
}, {
    timestamps: true,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;