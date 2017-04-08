'use strict';

var app = require('../..');
import request from 'supertest';

var newad;

describe('ad API:', function() {

  describe('GET /api/ads', function() {
    var ads;

    beforeEach(function(done) {
      request(app)
        .get('/api/ads')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          ads = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      ads.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/ads', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/ads')
        .send({
          name: 'New ad',
          info: 'This is the brand new ad!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newad = res.body;
          done();
        });
    });

    it('should respond with the newly created ad', function() {
      newad.name.should.equal('New ad');
      newad.info.should.equal('This is the brand new ad!!!');
    });

  });

  describe('GET /api/ads/:id', function() {
    var ad;

    beforeEach(function(done) {
      request(app)
        .get('/api/ads/' + newad._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          ad = res.body;
          done();
        });
    });

    afterEach(function() {
      ad = {};
    });

    it('should respond with the requested ad', function() {
      ad.name.should.equal('New ad');
      ad.info.should.equal('This is the brand new ad!!!');
    });

  });

  describe('PUT /api/ads/:id', function() {
    var updatedad;

    beforeEach(function(done) {
      request(app)
        .put('/api/ads/' + newad._id)
        .send({
          name: 'Updated ad',
          info: 'This is the updated ad!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedad = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedad = {};
    });

    it('should respond with the updated ad', function() {
      updatedad.name.should.equal('Updated ad');
      updatedad.info.should.equal('This is the updated ad!!!');
    });

  });

  describe('DELETE /api/ads/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/ads/' + newad._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when ad does not exist', function(done) {
      request(app)
        .delete('/api/ads/' + newad._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
