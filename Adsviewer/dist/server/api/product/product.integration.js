'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = require('../..');


var newProduct;

describe('Product API:', function () {
  describe('GET /api/products', function () {
    var products;

    beforeEach(function (done) {
      (0, _supertest2.default)(app).get('/api/products').expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        products = res.body;
        done();
      });
    });

    it('should respond with JSON array', function () {
      products.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/products', function () {
    beforeEach(function (done) {
      (0, _supertest2.default)(app).post('/api/products').send({
        name: 'New Product',
        info: 'This is the brand new product!!!'
      }).expect(201).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        newProduct = res.body;
        done();
      });
    });

    it('should respond with the newly created product', function () {
      newProduct.name.should.equal('New Product');
      newProduct.info.should.equal('This is the brand new product!!!');
    });
  });

  describe('GET /api/products/:id', function () {
    var product;

    beforeEach(function (done) {
      (0, _supertest2.default)(app).get('/api/products/' + newProduct._id).expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        product = res.body;
        done();
      });
    });

    afterEach(function () {
      product = {};
    });

    it('should respond with the requested product', function () {
      product.name.should.equal('New Product');
      product.info.should.equal('This is the brand new product!!!');
    });
  });

  describe('PUT /api/products/:id', function () {
    var updatedProduct;

    beforeEach(function (done) {
      (0, _supertest2.default)(app).put('/api/products/' + newProduct._id).send({
        name: 'Updated Product',
        info: 'This is the updated product!!!'
      }).expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        updatedProduct = res.body;
        done();
      });
    });

    afterEach(function () {
      updatedProduct = {};
    });

    it('should respond with the updated product', function () {
      updatedProduct.name.should.equal('Updated Product');
      updatedProduct.info.should.equal('This is the updated product!!!');
    });

    it('should respond with the updated product on a subsequent GET', function (done) {
      (0, _supertest2.default)(app).get('/api/products/' + newProduct._id).expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        var product = res.body;

        product.name.should.equal('Updated Product');
        product.info.should.equal('This is the updated product!!!');

        done();
      });
    });
  });

  describe('PATCH /api/products/:id', function () {
    var patchedProduct;

    beforeEach(function (done) {
      (0, _supertest2.default)(app).patch('/api/products/' + newProduct._id).send([{ op: 'replace', path: '/name', value: 'Patched Product' }, { op: 'replace', path: '/info', value: 'This is the patched product!!!' }]).expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        patchedProduct = res.body;
        done();
      });
    });

    afterEach(function () {
      patchedProduct = {};
    });

    it('should respond with the patched product', function () {
      patchedProduct.name.should.equal('Patched Product');
      patchedProduct.info.should.equal('This is the patched product!!!');
    });
  });

  describe('DELETE /api/products/:id', function () {
    it('should respond with 204 on successful removal', function (done) {
      (0, _supertest2.default)(app).delete('/api/products/' + newProduct._id).expect(204).end(function (err) {
        if (err) {
          return done(err);
        }
        done();
      });
    });

    it('should respond with 404 when product does not exist', function (done) {
      (0, _supertest2.default)(app).delete('/api/products/' + newProduct._id).expect(404).end(function (err) {
        if (err) {
          return done(err);
        }
        done();
      });
    });
  });
});
//# sourceMappingURL=product.integration.js.map
