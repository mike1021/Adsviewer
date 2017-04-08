'use strict';

var app = require('../..');
import request from 'supertest';

var newBanner;

describe('Banner API:', function() {

  describe('GET /api/banners', function() {
    var banners;

    beforeEach(function(done) {
      request(app)
        .get('/api/banners')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          banners = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      banners.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/banners', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/banners')
        .send({
          name: 'New Banner',
          info: 'This is the brand new banner!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newBanner = res.body;
          done();
        });
    });

    it('should respond with the newly created banner', function() {
      newBanner.name.should.equal('New Banner');
      newBanner.info.should.equal('This is the brand new banner!!!');
    });

  });

  describe('GET /api/banners/:id', function() {
    var banner;

    beforeEach(function(done) {
      request(app)
        .get('/api/banners/' + newBanner._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          banner = res.body;
          done();
        });
    });

    afterEach(function() {
      banner = {};
    });

    it('should respond with the requested banner', function() {
      banner.name.should.equal('New Banner');
      banner.info.should.equal('This is the brand new banner!!!');
    });

  });

  describe('PUT /api/banners/:id', function() {
    var updatedBanner;

    beforeEach(function(done) {
      request(app)
        .put('/api/banners/' + newBanner._id)
        .send({
          name: 'Updated Banner',
          info: 'This is the updated banner!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedBanner = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedBanner = {};
    });

    it('should respond with the updated banner', function() {
      updatedBanner.name.should.equal('Updated Banner');
      updatedBanner.info.should.equal('This is the updated banner!!!');
    });

  });

  describe('DELETE /api/banners/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/banners/' + newBanner._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when banner does not exist', function(done) {
      request(app)
        .delete('/api/banners/' + newBanner._id)
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
