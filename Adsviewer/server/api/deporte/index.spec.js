'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var deporteCtrlStub = {
  index: 'deporteCtrl.index',
  show: 'deporteCtrl.show',
  create: 'deporteCtrl.create',
  update: 'deporteCtrl.update',
  destroy: 'deporteCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var deporteIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './deporte.controller': deporteCtrlStub
});

describe('Deporte API Router:', function() {

  it('should return an express router instance', function() {
    expect(deporteIndex).to.equal(routerStub);
  });

  describe('GET /api/deportes', function() {

    it('should route to deporte.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'deporteCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/deportes/:id', function() {

    it('should route to deporte.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'deporteCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/deportes', function() {

    it('should route to deporte.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'deporteCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/deportes/:id', function() {

    it('should route to deporte.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'deporteCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/deportes/:id', function() {

    it('should route to deporte.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'deporteCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/deportes/:id', function() {

    it('should route to deporte.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'deporteCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
