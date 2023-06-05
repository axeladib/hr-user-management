module.exports = app => {
    const users = require('../controllers/user.controller.js');
    var router = require('express').Router();

    //all request
    router.post('/register', users.addUser);

    router.get('/all', users.retrieveAll);

    router.get('/:username', users.retrieveUser);

    //pass address to access the api
    app.use('/api/user',router);
}