const router = require('express').Router()

const { 
    addDestination,
    getAllDestinations,
    getDestinationById,
    getDestinationsByLocation,
    getDestinationsByRating
} = require('../controller/index.js');

router.post('/destination', addDestination);
router.get('/destinations', getAllDestinations);
router.get('/destinations/l:id', getDestinationById);
router.get('/destinations/location/:lokasi', getDestinationsByLocation);
router.get('/destinations/rating/', getDestinationsByRating);

module.exports = router;