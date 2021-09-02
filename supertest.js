/* eslint-disable quote-props */
/* eslint-disable indent */
const request = require('supertest');

const server = 'http://localhost:3000';
const assert = require('assert');

/**
 * Read the docs! https://www.npmjs.com/package/supertest
 */


// api routes to an api endpoint
// api routes to an api endpoint
// api routes to an api endpoint
// api routes to an api endpoint
describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      // Note that we return the evaluation of `request` here! It evaluates to
      // a promise, so Jest knows not to say this test passes until that
      // promise resolves. See https://jestjs.io/docs/en/asynchronous
      xit('responds with 200 status and text/html content type', () => request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200));
    });
  });

  describe('/markets', () => {
    describe('GET', () => {
      xit('responds with 200 status and application/json content type', () => request(server)
        .get('/markets')
        .expect('Content-Type', /json/)
        .expect(200));

      // For this test, you'll need to inspect the body of the response and
      // ensure it contains the markets list. Check the markets.dev.json file
      // in the dev database to get an idea of what shape you're expecting.
      xit('markets from "DB" json are in body of response', () => request(server)
        .get('/markets')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((response) => {
           assert(response.body[0].location, 'here');
        })
        .catch(err => console.log(err)));
    });

    describe('PUT', () => {
      xit('responds with 200 status and application/json content type', () => {
        const obj = [{ 'location': 'here', 'cards': 11 }, { 'location': 'there', 'cards': 0 }];
        return request(server)
        .put('/markets')
        .send(obj)
        .expect('Content-Type', /json/)
        .expect(200);
      });

      xit('responds with the updated market list', () => {
        const obj = [{ 'location': 'here', 'cards': 11 }, { 'location': 'there', 'cards': 0 }];
        return request(server)
        .put('/markets')
        .send(obj)
        .expect('Content-Type', /json/)
        .expect(200)
        .expect(obj);
    });

      it('responds to invalid request with 400 status and error message in body', () => {
        const obj = [{ 'location': 'here'}, { 'location': 'there', 'cards': 0 }];
        return request(server)
        .put('/markets')
        .send(obj)
        .expect(400)
        .expect({error:{}})
      });
    });
  });
});
