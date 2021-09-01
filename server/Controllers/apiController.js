const User = require('../models/userModel.js');
const apiController = {}
const clientSecret = process.env.clientSecret
const clientID = process.env.clientID
const endQuery = `?client_id=${clientID}&client_secret=${clientSecret}`
const startQuery = `https://api.seatgeek.com/2/performers?slug`
import axios from 'axios';


apiController.addTopics = async (req, res, next) => {
    try {
        console.log('whywhy')
    const request = req.body.query
    const data = await axios.get(startQuery+request+endQuery)
    console.log(startQuery+request+endQuery)
    console.log('here')
    res.locals.performerData = data
    return next();
    } catch (err) {
      console.log(err);
      return next({ error: err });
    }
  };


  module.exports = apiController;