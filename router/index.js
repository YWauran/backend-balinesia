const router = require('express').Router()

const { 
    addDestination,
    getAllDestinations,
    getDestinationById,
    getDestinationsByLocation,
    getDestinationsByRating,
    updateDestination,
    deleteDestination,
} = require('../controller/index.js');

router.post('/destination', addDestination);
router.get('/destinations', getAllDestinations);
router.get('/destinations/:id', getDestinationById);
router.get('/destinations/location/:lokasi', getDestinationsByLocation);
router.get('/destinations/rating/', getDestinationsByRating);
router.put('/destinations/:id', updateDestination);
router.delete('/destinations/:id', deleteDestination);

module.exports = router;