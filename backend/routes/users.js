const express = require('express');
const jsend = require('jsend');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const UserService = require('../services/UserService');
const db = require('../models');
const userService = new UserService(db);
router.use(jsend.middleware);
// const  authenticateToken  = require('../securedEndpoint');

function authenticateToken(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect('/login');
}

// GET ALL USER
router.get('/all', /*authenticateToken,*/ async function (req, res, next) {
  try {
    const users = await userService.getAllUsers();
    res.status(200).jsend.success({ ' result': users });
  } catch (error) {
    res.status(500).jsend.fail({ 'result': error.message });
  }
});


// GET USER BY ID getUserById
router.get('/byid/:id', authenticateToken, jsonParser, async function (req, res, next) {
  const userId = req.params.id;
  if (!userId) {
    return res.status(400).jsend.fail({ 'result': 'userId is required' });
  }

  try {
    const user = await userService.getUserById(userId);
    if (!user) {
      return res.status(400).jsend.fail({ 'result': 'User with given id not found' });
    }
    return res.status(200).jsend.success({ 'result': user });
  } catch (error) {
    return res.status(500).jsend.fail({ 'result': error.message + 'xx' });
  }
});


// all user
router.get('/user/all', authenticateToken, async function (req, res, next) {
  try {
    const users = await userService.DisplayAllUser();
    const context = { title: "Parts for your needs", user: req.user || null, messages: req.flash() };
    res.render('user/all', { users: users, context });
    res.status(200).render({ 'result': users });
  } catch (error) {
    res.status(500).jsend.fail({ 'result': error.message });
  }
});

// UPDATE USER
// router.put('/byid/:id', authenticateToken, jsonParser, async function (req, res, next) {

//   try {
//       const userId = req.params.id;
//       const user = await userService.updateUser(userId, req.body);
//       res.status(200).jsend.success({ 'result': user });
//   } catch (error) {
//       res.status(500).jsend.fail({ 'result': error.message });
//   }
// });



module.exports = router;

