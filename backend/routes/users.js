const express = require('express');
const router = express.Router();
const jsend = require('jsend')
router.use(jsend.middleware)

const { USERS } = require('../data/userGenerater')


/* GET users listing. */
router.get('/users', (req, res, next) => {
  try {
    if (USERS.length === 0) {
      return res.jsend.fail({ "result": 'No data found' });
    } else {
      return res.jsend.success({ "result": USERS });
    }
  } catch (error) {
    return res.jsend.fail({ "error": error });
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






module.exports = router;
