const Order = require("../models/order");

const getAllOrders = async (req, res) => {
  const {sort} = req.query;
  const queryObject = {};

  let results = Order.find(queryObject);

  if(sort){
    const sortParams = sort;
    const sortList = results.sort(sortParams);
  }
  else {
    results = results.sort('name');
  }
  try {
    const orders = await results;
    if (!orders) {
      return res.status(404).send("No Orders Found");
    }
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(200).send(order);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const getOrder = async (req, res) => {
    try {
      const { id: orderID } = req.params;
      const order = await Order.findOne({ _id: orderID });
      if(!order){
        return res.status(404).json({msg: "No such order found!"})
      }
      res.status(200).json(order)
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
const deleteOrder = async (req, res) => {
  try {
      const {id: orderID } = req.params; 
      const order = await Order.findByIdAndDelete({_id : orderID});
      if (!order) {
        return res.status(500).send("This order does not exist foo!");
      }
      res.status(200).send("Order Deleted Successfully");
  } catch (error) {
    console.log(error);
  }
};
const updateOrder = async (req, res) => {
    try {
      const { id: orderID } = req.params;
      const order = await Order.findOneAndUpdate({ _id: orderID }, req.body, {
        new:true,
        runValidators:true
      });
      if(!order){
        return res.status(404).json({msg: "No such order found!"})
      }
      res.status(200).json(order)
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

module.exports = {
  getAllOrders,
  createOrder,
  getOrder,
  deleteOrder,
  updateOrder,
};
