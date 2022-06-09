const router = require('express').Router()

const { 
    addDestination,
} = require('../controller/index.js');

router.post('/destination', addDestination);

module.exports = router;