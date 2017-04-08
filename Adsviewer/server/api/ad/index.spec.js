'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var adCtrlStub = {
  index: 'adCtrl.index',
  show: 'adCtrl.show',
  create: 'adCtrl.create',
  update: 'adCtrl.update',
  destroy: 'adCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var adIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './ad.controller': adCtrlStub
});

describe('ad API Router:', function() {

  it('should return an express router instance', function() {
    adIndex.should.equal(routerStub);
  });

  describe('GET /api/ads', function() {

    it('should route to ad.controller.index', function() {
      routerStub.get
        .withArgs('/', 'adCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/ads/:id', function() {

    it('should route to ad.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'adCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/ads', function() {

    it('should route to ad.controller.create', function() {
      routerStub.post
        .withArgs('/', 'adCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/ads/:id', function() {

    it('should route to ad.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'adCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/ads/:id', function() {

    it('should route to ad.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'adCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/ads/:id', function() {

    it('should route to ad.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'adCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
