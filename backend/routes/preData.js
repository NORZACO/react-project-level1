const express = require('express');
const jsend = require('jsend');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const PrePopulation = require('../utilities/prepopulation');
const db = require('../models');
const prePopulation = new PrePopulation(db);
router.use(jsend.middleware);


router.use(jsend.middleware)

const { USERS } = require('../data/userGenerater')


/* GET users listing. */
router.get('/utility/allusers', (req, res, next) => {
    try {
        if (USERS.length === 0) {
            return res.jsend.fail({ "result": 'No data found' });
        } else {
            return res.jsend.success({ "result": USERS });
        }
    } catch (error) {
        return res.jsend.fail({ "result": error.message });
    }
});

router.get('/users/:id', (req, res, next) => {
    try {
        const id = req.params.id;
        const user = USERS.find(user => user.userId === id);
        if (!user) {
            return res.jsend.fail({ "result": 'No data found' });
        } else {
            return res.jsend.success({ "result": user });
        }
    } catch (error) {
        return res.jsend.fail({ "error": error });
    }
});



router.post('/create/utilities', jsonParser, async (req, res, next) => {
    try {
        // const user = req.body;
        const users = await prePopulation.Utilityprepopulation();
        return res.jsend.success({ "result": users });
    } catch (error) {
        return res.jsend.fail({ "result": error.message });
    }
});









        module.exports = router;
