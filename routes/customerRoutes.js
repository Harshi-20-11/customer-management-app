// routes/customerRoutes.js

const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.get('/', customerController.getAllCustomers);
router.get('/search', customerController.searchCustomers);
router.get('/page/:pageNo', customerController.getCustomersByPage);
router.get('/sort', customerController.sortCustomers);

module.exports = router;
