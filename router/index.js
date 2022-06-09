const router = require('express').Router()

const { 
    addDestination,
    getAllDestinations
} = require('../controller/index.js');

router.post('/destination', addDestination);
router.get('/destinations', getAllDestinations);

module.exports = router;