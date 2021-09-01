require('dotenv').config();
const {Users} = require('../models/userModel.js');
const apiController = {}
const clientSecret = process.env.clientSecret
const clientID = process.env.clientID
const endQuery = `&client_id=${clientID}&client_secret=${clientSecret}`
const fetch = require('node-fetch')
const frontQueryPeformerSearch = 'https://api.seatgeek.com/2/performers?slug='
const frontQueryEventSearch= 'https://api.seatgeek.com/2/events?'

//const password = req.body.password;
//const data = await User.findOne({username: username})
apiController.facebookLogin = async (req, res, next) => {
    try {
      return next();
    } catch (err) {
      console.log(err)
      return next({ error: err });
    }
  };



apiController.addTopics = async (req, res, next) => {
    try {
    const query = req.body.data.split(' ').join('-')
    const data = await fetch(frontQueryPeformerSearch+query+endQuery)
    const result = await data.json()
    res.locals.performerData = result
    const likedList = {
      typeThing: result.performers[0].type,
      name:result.performers[0].name,
      image:result.performers[0].image,
      id:result.performers[0].id
    }
    res.locals.performerData = likedList

    const update = {}
    update['likedList'] = likedList
    const dbResult = await Users.findOneAndUpdate({username: 'test', password:'test'}, {$addToSet:{update}}, {
        new: true,
        upsert:true
    });
      return next();
    } catch (err) {
      console.log(err);
      return next({ error: err });
    }
  };

//events[0].stats.lowest_sg_base_price
//events[0].url
// let today = new Date();
// let date = today.getFullYear()+'-'+'0'+(today.getMonth()+1)+'-'+today.getDate();
apiController.findEvents = async (req, res, next) => {
    try {
      const query = `performers.id=${res.locals.performerData.id}`
      const data = await fetch(frontQueryEventSearch+query+endQuery)
      const result = await data.json()

      const listy = []
      for(let i =0; i<result.events.length; i++){
        const date = new Date(result.events[i].datetime_utc)
        listy.push({
        dateTime: date.toLocaleDateString(),
        price: result.events[i].stats.lowest_sg_base_price,
        url: result.events[i].url,
        image: result.events[i].performers[0].image,
        name: result.events[i].performers[0].name
      })
      }
      res.locals.eventData = listy
      return next();
    } catch (err) {
      console.log(err)
      return next({ error: err });
    }
  };


apiController.getAllEvents = async (req, res, next) => {
    try {
      const dbResult = await Users.findOne({username: 'test', password:'test'});
      console.log(dbResult)
      res.locals.data = dbResult
      return next();
    } catch (err) {
      console.log(err)
      return next({ error: err });
    }
  };

apiController.searchForEvents = async (req, res, next) => {
    try {
      return next();
    } catch (err) {
      console.log(err)
      return next({ error: err });
    }
  };


//   geoip: optional, default is false
// Accepts one of: a valid IP address (useful when making a request 
// server-side on behalf of a client); a valid US or Canadian postal code; 
// or true, to attempt to geolocate by the requesting client's IP 
// (useful when calling directly from a browser).
// lat: optional, lon is required if used
// Latitude in decimal degrees.
// lon: optional, lat is required if used
// Longitude in decimal degrees.
// range: optional, default is 30mi
// The number of miles (or kilometers, with km) to search around the location
apiController.geoLocateEvents = async (req, res, next) => {
    try {
      
      return next();
    } catch (err) {
      console.log(err)
      return next({ error: err });
    }
  };



// apiController. = async (req, res, next) => {
//     try {
//       return next();
//     } catch (err) {
//       console.log(err)
//       return next({ error: err });
//     }
//   };
// apiController. = async (req, res, next) => {
//     try {
//       return next();
//     } catch (err) {
//       console.log(err)
//       return next({ error: err });
//     }
//   };
// apiController. = async (req, res, next) => {
//     try {
//       return next();
//     } catch (err) {
//       console.log(err)
//       return next({ error: err });
//     }
//   };


//was used to get a list of all taxonomies... see taxonomies.json for result
apiController.taxonomies = async (req, res, next) => {
  try {
    const data = await fetch('https://api.seatgeek.com/2/taxonomies'+`?client_id=${clientID}&client_secret=${clientSecret}`)
    const result = await data.json()
    const filter = result.taxonomies
    const list = filter.map((e)=> e.name)
    res.locals.data = list
    return next();
  } catch (err) {
    console.log(err)
    return next({ error: err });
  }
};

  module.exports = apiController;