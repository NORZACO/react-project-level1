const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const jsend = require('jsend')

const db = require("../models");
const UserService = require("../services/UserService");
// jsend

// const { Callbacks } = require('jquery');
const userService = new UserService(db);

passport.use(new LocalStrategy(function verify(username, password, Callback) {
    userService.getOneByName(username).then((data) => {
        if (data === null) {
            return Callback(null, false, { message: 'Incorrect username or password.' });
        }
        //bcrypt
        const saltRounds = parseInt(process.env.SALT) || 8;
        console.log("salt rounds", saltRounds)
        const hashedPassword = data.encryptedPassword.toString()
        bcrypt.compare(password, hashedPassword, (err, result) => {
            if (err) { return Callback(err); }
            if (!result) {
                return Callback(null, false, { message: 'Incorrect username or password.' });
            }
            return Callback(null, data);
        });
    });
}));





passport.serializeUser(function (user, Callback) {
    process.nextTick(() => {
        Callback(null, { id: user.id, username: user.Username });
    });
});

passport.deserializeUser((user, Callback) => {
    process.nextTick(() => Callback(null, user));
});

var router = express.Router();
router.use(jsend.middleware)

router.get('/login', function (req, res, next) {
    res.render('login');
});





router.post('/login/password', passport.authenticate('local', {
    successReturnToOrRedirect: '/',
    failureRedirect: '/login',
    failureMessage: true
}));




router.post('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});


// router.get('/register', function (req, res, next) {
//     res.render('signup');
// });


router.post('/signup', async function (req, res, next) {
    // FirstName, LastName, Username, Email, password, RoleId
    const { firstName, lastName, username, email, password } = req.body
    try {
        const createdUser = await userService.createUser(
            firstName,
            lastName,
            username,
            email,
            password
        );
        res.jsend.success({ "result": createdUser });
    } catch (err) {
        // next(err);
        res.status(500).jsend.fail({ "result": err.message });
    }
});





module.exports = router;