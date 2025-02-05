const mongoose = require('mongoose');
const Trip = require('../models/travlr'); //Register model
const Model = mongoose.model('trips');

//GET: /trips - lists all the trips
//Regardless of outcome, response must include HTML status code
//and JSON message to the requestion client
const tripsList = async(req, res) => {
    const q = await Model
        .find({})
        .exec();

    //uncomment to show low on console    
    //console.log(q);

    if(!q)
    { //Database returned no data
        return res
            .status(404)
            .json(err);
    } else {
        return res
            .status(200)
            .json(q);
    }
};

module.exports = {
    tripsList
};