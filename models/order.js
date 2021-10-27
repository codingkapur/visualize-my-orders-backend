const mongoose = require("mongoose");

//Create Schema for Orders

const OrdersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must provide a name"],
    trim: true,
    maxlength: 25,
    minlength: 3,
  },
  address: {
    type: String,
  },
  phone: {
    type: Number,
    maxlength: 10,
    minlength: 10,
  },
  time: {
    type: Date,
  },
  item: {
    type: String,
  },
  source: {
    type: String,
  },
  status: {
    type: String,
  },
});

module.exports = mongoose.model("Order", OrdersSchema);
