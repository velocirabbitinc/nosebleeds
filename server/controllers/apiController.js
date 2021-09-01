require('dotenv').config();
const User = require('../models/userModel.js');
const apiController = {}
const clientSecret = process.env.clientSecret
const clientID = process.env.clientID
const endQuery = `&client_id=${clientID}&client_secret=${clientSecret}`
const fetch = require('node-fetch')
const frontQuery = 'https://api.seatgeek.com/2/performers?slug='

apiController.addTopics = async (req, res, next) => {
    try {
      console.log(req.body.data)
    const data = await fetch(frontQuery+'dodgers'+endQuery)
    const result = await data.json()
      console.log(result)
      return next();
    } catch (err) {
      console.log('error when signing up, please try again');
      return next({ error: err });
    }
  };


  module.exports = apiController;