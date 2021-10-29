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
    required: [true, "Must provide an address"],
  },
  phone: {
    type: Number,
    required: [true, "Must provide a number"],
    maxlength: 10,
    minlength: 10,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  item: {
    type: String,
    required: [true, "Must provide an item"],
    enum : ["T-Shirt", "Shorts", "Pants", "Track Pants", "Hoodie", "Sweatshirt", "Sneakers"],

  },
  source: {
    type: String,
    required: [true, "Must provide a source"],
    enum : ["Website", "Manual"],

  },
  delivery_status: {
    type: String,
    required: [true, "Must provide delivery status"],
    enum : ["Not Delivered", "Delivered", "In Transit"],

  },
  payment_status : {
    type: String,
    required: [true, "Must provide payment status"],
    enum : ["Paid", "On Delivery"],
  },
  email : {
    type: String,
    required: [true, "Must provide email"]
  }
});

module.exports = mongoose.model("Order", OrdersSchema);
