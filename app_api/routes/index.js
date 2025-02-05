const express = require('express'); //Express app
const router = express.Router();    //Router logic

//this is where we import the controllers we will route
const tripsController = require('../controllers/trips');

//define route for our trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList); //GET method routes tripList

module.exports = router;