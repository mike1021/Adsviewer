'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var cotizacionCtrlStub = {
  index: 'cotizacionCtrl.index',
  show: 'cotizacionCtrl.show',
  create: 'cotizacionCtrl.create',
  upsert: 'cotizacionCtrl.upsert',
  patch: 'cotizacionCtrl.patch',
  destroy: 'cotizacionCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var cotizacionIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './cotizacion.controller': cotizacionCtrlStub
});

describe('Cotizacion API Router:', function() {
  it('should return an express router instance', function() {
    cotizacionIndex.should.equal(routerStub);
  });

  describe('GET /api/cotizacions', function() {
    it('should route to cotizacion.controller.index', function() {
      routerStub.get
        .withArgs('/', 'cotizacionCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/cotizacions/:id', function() {
    it('should route to cotizacion.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'cotizacionCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/cotizacions', function() {
    it('should route to cotizacion.controller.create', function() {
      routerStub.post
        .withArgs('/', 'cotizacionCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/cotizacions/:id', function() {
    it('should route to cotizacion.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'cotizacionCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/cotizacions/:id', function() {
    it('should route to cotizacion.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'cotizacionCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/cotizacions/:id', function() {
    it('should route to cotizacion.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'cotizacionCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
