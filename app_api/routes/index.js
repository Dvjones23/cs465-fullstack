const express = require('express'); //Express app
const router = express.Router();
const { expressjwt: jwt } = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload',
    algorithms: ["HS256"],
});

//this is where we import the controllers we will route
const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');

//define route for registration endpoint
router
    .route('/register')
    .post(authController.register);

//define route for login
router
    .route('/login')
    .post(authController.login)

//define route for our trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList) //GET method routes tripList
    .post(auth, tripsController.tripsAddTrip); //Post method addsa a Trip
    //GET Method routes tripsFindByCode - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(auth, tripsController.tripsUpdateTrip);
    
module.exports = router;