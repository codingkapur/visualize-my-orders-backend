const express = require('express');
const router = express.Router();

const {
    getAllOrders,
    createOrder,
    getOrder,
    deleteOrder,
    updateOrder
} = require("../controllers/orders");

router.route("/").get(getAllOrders).post(createOrder);
router.route("/:id").get(getOrder).patch(updateOrder).delete(deleteOrder);

module.exports = router;
