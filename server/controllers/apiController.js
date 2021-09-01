const User = require('../models/userModel.js');
const apiController = {}
const clientSecret = process.env.clientSecret
const clientID = process.env.clientID
const endQuery = `?client_id=${clientID}&client_secret=${clientSecret}`


apiController.addTopics = async (req, res, next) => {
    try {
    console.log()

      return next();
    } catch (err) {
      console.log('error when signing up, please try again');
      return next({ error: err });
    }
  };


  module.exports = apiController;