const express = require('express');
const router = express.Router();
const jsend = require('jsend')
router.use(jsend.middleware)

const { PRODUCTS } = require('../data/userGenerater')


/* GET users listing. */
router.get('/products', (req, res, next) => {
    try {
        if (PRODUCTS.length === 0) {
            return res.jsend.fail({ "result": 'No data found' });
        } else {
            return res.jsend.success({ "result": PRODUCTS });
        }
    } catch (error) {
        return res.jsend.fail({ "error": error });
    }
});



router.get('/products/:id', (req, res, next) => {
    try {
        const id = req.params.id;
        const user = PRODUCTS.find(user => user.userId === id);
        if (!user) {
            return res.jsend.fail({ "result": 'No data found' });
        } else {
            return res.jsend.success({ "result": user });
        }
    } catch (error) {
        return res.jsend.fail({ "error": error });
    }
});






module.exports = router;
