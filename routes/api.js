const express = require('express');
const router = express.Router();

const {
    getAllOrders,
    createOrder,
} = require("../controllers/orders");

router.route("/").get(getAllOrders).post(createOrder);
// router.route("/:id").get().patch().delete();

module.exports = router;
