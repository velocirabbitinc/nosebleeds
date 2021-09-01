const mongoose = require('mongoose');
const { array } = require('prop-types');

const MONGO_URI = 'mongodb+srv://andy:codesmith@cluster0.bwbf3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'myFirstDatabase'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;


const UserSchema = new Schema({
  email: String,
  displayName: String,
  playlist: String,
  accessToken: String,
  refreshToken: String,
  expires: Date,
  image: String,
  listenedSongs:[{
    trackName: String,
    artistName:String
  }],
  likedSongs:[{
    spotifyID: String, 
    trackName: String,
    artistName: String
  }]
});


// creats a model for the 'species' collection that will be part of the export
const Users= mongoose.model('Users', UserSchema);


// exports all the models in an object to be used in the controller
module.exports = {
  Users,
};
