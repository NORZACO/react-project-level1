

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');







function Autthenticate(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).send({ message: 'No token provided' });

    jwt.verify(token, 'your-secret-key', (err, decoded) => {
        if (err) return res.status(403).send({ message: 'Failed to authenticate token' });
        req.user = decoded;
        next();
    });
}

// Then use the middleware in a route
router.get('/protected', Autthenticate, (req, res) => {
    res.send('This is a protected route');
});






/* GET home page. */
router.get('/', function (req, res, next) {

    res.render('index', { title: 'Express' });
});

module.exports = router;

