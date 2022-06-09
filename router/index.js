const router = require('express').Router()

const { 
    addDestination,
    getAllDestinations,
    getDestinationsByLocation
} = require('../controller/index.js');

router.post('/destination', addDestination);
router.get('/destinations', getAllDestinations);
router.get('/destinations/location/:lokasi', getDestinationsByLocation);

module.exports = router;