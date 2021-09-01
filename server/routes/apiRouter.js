const express = require('express');
const apiController = require('../controllers/apiController');
const router = express.Router();
//organize by cheaptes and by near time for the date
// post request to create user
router.post('/addTopics/', apiController.addTopics, (req, res) => {
  console.log(req.body)
  return res.status(200).json({performerData:res.locals.performerData});
})

// post request to authenticate user
router.post('/findEvents/', (req, res) => {
  return res.status(200).json();
  
})



module.exports = router;