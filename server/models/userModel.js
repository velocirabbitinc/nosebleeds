const mongoose = require('mongoose');
const { array, number } = require('prop-types');

const MONGO_URI = 'mongodb+srv://andy:codesmith@cluster0.bwbf3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

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
  facebookEmail: String,
  facebookImage: String,
  facebookName: String,
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  accessToken: String,
  refreshToken: String,
  likedList:[{
    typeThing: {type: String, unique: true},
    name: {type: String, unique: true},
    image:{type: String, unique: true},
    id: {type: Number, unique: true}
  }]
});


UserSchema.pre('save', function(next) {
  var user = this;
  console.log('this is this',this)

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')){
    console.log('this is falsy and i dont know why', user.password)
    return next();
  }
  //if it isn't hashed don't hash it 
  //which doesn't make sense

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);
    console.log(salt)

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);
      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});
   
UserSchema.methods.comparePassword =  async function validatePassword(data) {
  return bcrypt.compare(data, this.password);
};


// creats a model for the 'species' collection that will be part of the export
const Users= mongoose.model('Users', UserSchema);


// exports all the models in an object to be used in the controller
module.exports = {
  Users,
};
