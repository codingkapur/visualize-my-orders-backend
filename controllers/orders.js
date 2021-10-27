const Order = require("../models/order");

const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({});
        if(!orders){
            return res.status(404).send("No Orders Found")
        }
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).send(error.message)
    }
}
const createOrder = async (req, res) => {
    try{
        const order = await Order.create(req.body);
        res.status(200).send(order);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    getAllOrders,
    createOrder,
}