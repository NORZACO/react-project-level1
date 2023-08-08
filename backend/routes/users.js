const express = require('express');
const router = express.Router();
const jsend = require('jsend')
router.use(jsend.middleware)

const allData = require('../data/userGenerater')

// console.log(allData);


/* GET users listing. */
router.get('/users', (req, res, next) => {
  try {
    if (allData.length === 0) {
      return res.jsend.fail({ "result": 'No data found' });
    } else {
      return res.jsend.success({ "result": allData });
    }
  } catch (error) {
    return res.jsend.fail({ "error": error });
  }
});

router.get('/users/:id', (req, res, next) => {
  try {
    const id = req.params.id;
    const user = allData.find(user => user.userId === id);
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
