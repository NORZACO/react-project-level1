const express = require('express');
const router = express.Router();
const jsend = require('jsend')
router.use(jsend.middleware)

const topNatureCountries = require('../data/topNatureCountries')

/* GET users listing. */
router.get('/natures', (req, res, next) => {
    try {
        if (topNatureCountries.length === 0) {
            return res.jsend.fail({ "result": 'No data found' });
        } else {
            return res.jsend.success({ "result": topNatureCountries });
        }
    } catch (error) {
        return res.jsend.fail({ "error": error });
    }
});










module.exports = router;
