'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var productCtrlStub = {
  index: 'productCtrl.index',
  show: 'productCtrl.show',
  create: 'productCtrl.create',
  upsert: 'productCtrl.upsert',
  patch: 'productCtrl.patch',
  destroy: 'productCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var productIndex = proxyquire('./index.js', {
  express: {
    Router: function Router() {
      return routerStub;
    }
  },
  './product.controller': productCtrlStub
});

describe('Product API Router:', function () {
  it('should return an express router instance', function () {
    productIndex.should.equal(routerStub);
  });

  describe('GET /api/products', function () {
    it('should route to product.controller.index', function () {
      routerStub.get.withArgs('/', 'productCtrl.index').should.have.been.calledOnce;
    });
  });

  describe('GET /api/products/:id', function () {
    it('should route to product.controller.show', function () {
      routerStub.get.withArgs('/:id', 'productCtrl.show').should.have.been.calledOnce;
    });
  });

  describe('POST /api/products', function () {
    it('should route to product.controller.create', function () {
      routerStub.post.withArgs('/', 'productCtrl.create').should.have.been.calledOnce;
    });
  });

  describe('PUT /api/products/:id', function () {
    it('should route to product.controller.upsert', function () {
      routerStub.put.withArgs('/:id', 'productCtrl.upsert').should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/products/:id', function () {
    it('should route to product.controller.patch', function () {
      routerStub.patch.withArgs('/:id', 'productCtrl.patch').should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/products/:id', function () {
    it('should route to product.controller.destroy', function () {
      routerStub.delete.withArgs('/:id', 'productCtrl.destroy').should.have.been.calledOnce;
    });
  });
});
//# sourceMappingURL=index.spec.js.map
