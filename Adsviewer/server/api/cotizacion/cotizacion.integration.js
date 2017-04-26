'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newCotizacion;

describe('Cotizacion API:', function() {
  describe('GET /api/cotizacions', function() {
    var cotizacions;

    beforeEach(function(done) {
      request(app)
        .get('/api/cotizacions')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          cotizacions = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      cotizacions.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/cotizacions', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/cotizacions')
        .send({
          name: 'New Cotizacion',
          info: 'This is the brand new cotizacion!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newCotizacion = res.body;
          done();
        });
    });

    it('should respond with the newly created cotizacion', function() {
      newCotizacion.name.should.equal('New Cotizacion');
      newCotizacion.info.should.equal('This is the brand new cotizacion!!!');
    });
  });

  describe('GET /api/cotizacions/:id', function() {
    var cotizacion;

    beforeEach(function(done) {
      request(app)
        .get(`/api/cotizacions/${newCotizacion._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          cotizacion = res.body;
          done();
        });
    });

    afterEach(function() {
      cotizacion = {};
    });

    it('should respond with the requested cotizacion', function() {
      cotizacion.name.should.equal('New Cotizacion');
      cotizacion.info.should.equal('This is the brand new cotizacion!!!');
    });
  });

  describe('PUT /api/cotizacions/:id', function() {
    var updatedCotizacion;

    beforeEach(function(done) {
      request(app)
        .put(`/api/cotizacions/${newCotizacion._id}`)
        .send({
          name: 'Updated Cotizacion',
          info: 'This is the updated cotizacion!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedCotizacion = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedCotizacion = {};
    });

    it('should respond with the updated cotizacion', function() {
      updatedCotizacion.name.should.equal('Updated Cotizacion');
      updatedCotizacion.info.should.equal('This is the updated cotizacion!!!');
    });

    it('should respond with the updated cotizacion on a subsequent GET', function(done) {
      request(app)
        .get(`/api/cotizacions/${newCotizacion._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let cotizacion = res.body;

          cotizacion.name.should.equal('Updated Cotizacion');
          cotizacion.info.should.equal('This is the updated cotizacion!!!');

          done();
        });
    });
  });

  describe('PATCH /api/cotizacions/:id', function() {
    var patchedCotizacion;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/cotizacions/${newCotizacion._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Cotizacion' },
          { op: 'replace', path: '/info', value: 'This is the patched cotizacion!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedCotizacion = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedCotizacion = {};
    });

    it('should respond with the patched cotizacion', function() {
      patchedCotizacion.name.should.equal('Patched Cotizacion');
      patchedCotizacion.info.should.equal('This is the patched cotizacion!!!');
    });
  });

  describe('DELETE /api/cotizacions/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/cotizacions/${newCotizacion._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when cotizacion does not exist', function(done) {
      request(app)
        .delete(`/api/cotizacions/${newCotizacion._id}`)
        .expect(404)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });
  });
});
