// Here we will be unit testing the 3 main database functions from server/db/markets.js
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const mongoURI = ('mongodb+srv://Daniel:codesmith@cluster0.mm1df.mongodb.net/Cluster0?retryWrites=true&w=majority')

describe('Can I make a call to the database?', () => {

  beforeAll((done) => {
    fs.writeFile(testJsonFile, JSON.stringify([]), () => {
      db.reset();
      done();
    });
  });

  afterAll((done) => {
    fs.writeFile(testJsonFile, JSON.stringify([]), done);
  });
  describe('#sync', () => {
    xit('writes a valid marketList to the JSON file', () => {
      const marketList = [{ location: 'here', cards: 11 }, { location: 'there', cards: 0 }];
      const result = db.sync(marketList);
      expect(result).not.toBeInstanceOf(Error);
      const table = JSON.parse(fs.readFileSync(testJsonFile));
      expect(table).toEqual(marketList);
    });
  });
});
