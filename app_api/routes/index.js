const express = require('express'); //Express app
const router = express.Router();    //Router logic
const { expressjwt: jwt } = require('express-jwt');
const auth = jwt({ secret: process.env.JWT_SECRET, userProperty: 'payload', algorithms: ['HS512'] });

const authController = require('../controllers/authentication'); //import the authentication controller
const tripsController = require('../controllers/trips'); //import the trips controller

router
    .route('/login')
    .post(authController.login);

router
    .route('/register')
    .post(authController.register);

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