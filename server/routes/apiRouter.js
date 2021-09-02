const express = require('express');
const apiController = require('../Controllers/apiController');
const router = express.Router();
const clientSecret = process.env.clientSecret
const clientID = process.env.clientID
const endQuery = `?client_id=${clientID}&client_secret=${clientSecret}`
//organize by cheaptes and by near time for the date
// post request to create user apiController.addTopics,apiController.findEvents,
router.post('/addTopics/', apiController.addTopics,apiController.findEvents,(req, res) => {
  return res.status(200).json({newFav:res.locals.performerData, eventsList: res.locals.eventData, failed:res.locals.failed});
})
// performerData:res.locals.performerData, 
// post request to authenticate user
router.post('/findEvents/', apiController.findEvents, (req, res) => {
  return res.status(200).json();
  
})
router.post('/login/', apiController.login, apiController.getAllEvents, (req, res) => {
  console.log('testing login')
  return res.status(200).json({userID: res.locals.userID, eventList: res.locals.eventData, favsList:res.locals.likedList, data:res.locals.data});
})
router.post('/signup/', apiController.signup, (req, res) => {
  console.log('this is the endpoint', res.locals.userID)
  return res.status(200).json({userID: res.locals.userID});
})



//this was used to get all taxonomies see taxonomies.json
router.get('/taxonomies/',apiController.taxonomies, (req, res) => {
  console.log('herehere')
  return res.status(200).json({data:res.locals.data});
})



module.exports = router;