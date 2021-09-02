const express = require('express');
const apiController = require('../controllers/apiController');
const router = express.Router();
const clientSecret = process.env.clientSecret
const clientID = process.env.clientID
const endQuery = `?client_id=${clientID}&client_secret=${clientSecret}`
//organize by cheaptes and by near time for the date
// post request to create user apiController.addTopics,apiController.findEvents,
router.post('/addTopics/', apiController.addTopics,apiController.findEvents,(req, res) => {
  console.log(req.body)
  return res.status(200).json({performerData:res.locals.performerData, events: res.locals.eventData});
})
// performerData:res.locals.performerData, 
// post request to authenticate user
router.post('/findEvents/', apiController.findEvents, (req, res) => {
  return res.status(200).json();
  
})
router.post('/login/', apiController.getAllEvents, (req, res) => {
  return res.status(200).json({data: res.locals.data});
})



//this was used to get all taxonomies see taxonomies.json
router.get('/taxonomies/',apiController.taxonomies, (req, res) => {
  console.log('herehere')
  return res.status(200).json({data:res.locals.data});
})



module.exports = router;