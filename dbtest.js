const mongoose = require('mongoose');
const { array, number } = require('prop-types');
const {Users} = require('../server/models/userModel.js');
const MONGO_URI = 'mongodb+srv://andy:codesmith@cluster0.bwbf3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'test'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));


describe('Can I make a call to the database?', () => {

   beforeAll((done) => {
    Users.deleteMany({})
    .then(e => {console.log('deleted', e)})
    .catch(err => console.log(err))
      done();
  });

  afterAll((done) => {
    Users.deleteMany({})
    .then(e => {console.log('deleted', e)})
    .catch(err => console.log(err))
      done();
  });

  describe('database testing', () => {
    it('creates a user', async () => {
      const data = await Users.create({username:'bigboi', password:'papa'})
      expect(data.username).toEqual('bigboi');
    });
  });
});
