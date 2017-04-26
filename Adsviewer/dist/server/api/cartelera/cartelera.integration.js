'use strict';

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = require('../..');


var newCartelera;

describe('Cartelera API:', function () {

  describe('GET /api/carteleras', function () {
    var carteleras;

    beforeEach(function (done) {
      (0, _supertest2.default)(app).get('/api/carteleras').expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        carteleras = res.body;
        done();
      });
    });

    it('should respond with JSON array', function () {
      carteleras.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/carteleras', function () {
    beforeEach(function (done) {
      (0, _supertest2.default)(app).post('/api/carteleras').send({
        name: 'New carteleras',
        info: 'This is the brand new ad!!!'
      }).expect(201).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        newCartelera = res.body;
        done();
      });
    });

    it('should respond with the newly created ad', function () {
      newCartelera.name.should.equal('New car');
      newCartelera.info.should.equal('This is the brand new cartelera!!!');
    });
  });

  describe('GET /api/carteleras/:id', function () {
    var cartelera;

    beforeEach(function (done) {
      (0, _supertest2.default)(app).get('/api/carteleras/' + newCartelera._id).expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        cartelera = res.body;
        done();
      });
    });

    afterEach(function () {
      cartelera = {};
    });

    it('should respond with the requested cartelera', function () {
      cartelera.name.should.equal('New cartelera');
      cartelera.info.should.equal('This is the brand new ad!!!');
    });
  });

  describe('PUT /api/carteleras/:id', function () {
    var updatedCartelera;

    beforeEach(function (done) {
      (0, _supertest2.default)(app).put('/api/carteleras/' + newCartelera._id).send({
        name: 'Updated carteleras',
        info: 'This is the updated ad!!!'
      }).expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        updatedCartelera = res.body;
        done();
      });
    });

    afterEach(function () {
      updatedCartelera = {};
    });

    it('should respond with the updated ad', function () {
      updatedCartelera.name.should.equal('Updated ad');
      updatedCartelera.info.should.equal('This is the updated ad!!!');
    });
  });

  describe('DELETE /api/carteleras/:id', function () {

    it('should respond with 204 on successful removal', function (done) {
      (0, _supertest2.default)(app).delete('/api/carteleras/' + newCartelera._id).expect(204).end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
    });

    it('should respond with 404 when ad does not exist', function (done) {
      (0, _supertest2.default)(app).delete('/api/carteleras/' + newCartelera._id).expect(404).end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
    });
  });
});
//# sourceMappingURL=cartelera.integration.js.map
