const express = require('express');
const apiController = require('../controllers/apiController');
const router = express.Router();
const clientSecret = process.env.clientSecret
const clientID = process.env.clientID
const endQuery = `?client_id=${clientID}&client_secret=${clientSecret}`
//organize by cheaptes and by near time for the date
// post request to create user
router.post('/addTopics/', apiController.addTopics, (req, res) => {
  console.log(req.body)
  console.log(apiController.addTopics)
  return res.status(200).json({performerData:res.locals.performerData});
})

// post request to authenticate user
router.post('/findEvents/', (req, res) => {
  return res.status(200).json();
  
})



module.exports = router;