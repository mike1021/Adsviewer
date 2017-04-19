'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var eventoCtrlStub = {
  index: 'eventoCtrl.index',
  show: 'eventoCtrl.show',
  create: 'eventoCtrl.create',
  update: 'eventoCtrl.update',
  destroy: 'eventoCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var eventoIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './evento.controller': eventoCtrlStub
});

describe('Evento API Router:', function() {
  it('should return an express router instance', function() {
    eventoIndex.should.equal(routerStub);
  });

  describe('GET /api/eventos', function() {
    it('should route to evento.controller.index', function() {
      routerStub.get
        .withArgs('/', 'eventoCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/eventos/:id', function() {
    it('should route to evento.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'eventoCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/eventos', function() {
    it('should route to evento.controller.create', function() {
      routerStub.post
        .withArgs('/', 'eventoCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/eventos/:id', function() {
    it('should route to evento.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'eventoCtrl.update')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/eventos/:id', function() {
    it('should route to evento.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'eventoCtrl.update')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/eventos/:id', function() {
    it('should route to evento.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'eventoCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
