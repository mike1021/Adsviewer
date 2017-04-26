'use strict';

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = require('../..');


var newDeporte;

describe('Deporte API:', function () {

  describe('GET /api/deportes', function () {
    var deportes;

    beforeEach(function (done) {
      (0, _supertest2.default)(app).get('/api/deportes').expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        deportes = res.body;
        done();
      });
    });

    it('should respond with JSON array', function () {
      expect(deportes).to.be.instanceOf(Array);
    });
  });

  describe('POST /api/deportes', function () {
    beforeEach(function (done) {
      (0, _supertest2.default)(app).post('/api/deportes').send({
        name: 'New Deporte',
        info: 'This is the brand new deporte!!!'
      }).expect(201).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        newDeporte = res.body;
        done();
      });
    });

    it('should respond with the newly created deporte', function () {
      expect(newDeporte.name).to.equal('New Deporte');
      expect(newDeporte.info).to.equal('This is the brand new deporte!!!');
    });
  });

  describe('GET /api/deportes/:id', function () {
    var deporte;

    beforeEach(function (done) {
      (0, _supertest2.default)(app).get('/api/deportes/' + newDeporte._id).expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        deporte = res.body;
        done();
      });
    });

    afterEach(function () {
      deporte = {};
    });

    it('should respond with the requested deporte', function () {
      expect(deporte.name).to.equal('New Deporte');
      expect(deporte.info).to.equal('This is the brand new deporte!!!');
    });
  });

  describe('PUT /api/deportes/:id', function () {
    var updatedDeporte;

    beforeEach(function (done) {
      (0, _supertest2.default)(app).put('/api/deportes/' + newDeporte._id).send({
        name: 'Updated Deporte',
        info: 'This is the updated deporte!!!'
      }).expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        updatedDeporte = res.body;
        done();
      });
    });

    afterEach(function () {
      updatedDeporte = {};
    });

    it('should respond with the updated deporte', function () {
      expect(updatedDeporte.name).to.equal('Updated Deporte');
      expect(updatedDeporte.info).to.equal('This is the updated deporte!!!');
    });
  });
});
//# sourceMappingURL=deporte.integration.js.map
