'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var carteleraCtrlStub = {
  index: 'carteleraCtrl.index',
  show: 'carteleraCtrl.show',
  create: 'carteleraCtrl.create',
  update: 'carteleraCtrl.update',
  destroy: 'carteleraCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var carteleraIndex = proxyquire('./index.js', {
  'express': {
    Router: function Router() {
      return routerStub;
    }
  },
  './cartelera.controller': carteleraCtrlStub
});

describe('cartelera API Router:', function () {

  it('should return an express router instance', function () {
    carteleraIndex.should.equal(routerStub);
  });

  describe('GET /api/carteleras', function () {

    it('should route to cartelera.controller.index', function () {
      routerStub.get.withArgs('/', 'carteleraCtrl.index').should.have.been.calledOnce;
    });
  });

  describe('GET /api/carteleras/:id', function () {

    it('should route to cartelera.controller.show', function () {
      routerStub.get.withArgs('/:id', 'carteleraCtrl.show').should.have.been.calledOnce;
    });
  });

  describe('POST /api/carteleras', function () {

    it('should route to cartelera.controller.create', function () {
      routerStub.post.withArgs('/', 'carteleraCtrl.create').should.have.been.calledOnce;
    });
  });

  describe('PUT /api/carteleras/:id', function () {

    it('should route to cartelera.controller.update', function () {
      routerStub.put.withArgs('/:id', 'carteleraCtrl.update').should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/carteleras/:id', function () {

    it('should route to cartelera.controller.update', function () {
      routerStub.patch.withArgs('/:id', 'carteleraCtrl.update').should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/carteleras/:id', function () {

    it('should route to cartelera.controller.destroy', function () {
      routerStub.delete.withArgs('/:id', 'carteleraCtrl.destroy').should.have.been.calledOnce;
    });
  });
});
//# sourceMappingURL=index.spec.js.map
