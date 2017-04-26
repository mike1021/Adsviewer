'use strict';

describe('Component: ProductsComponent', function() {
  // load the controller's module
  beforeEach(module('adsviewerApp.products'));

  var EventosComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController, $rootScope, $ngMaterial) {
    scope = $rootScope.$new();
    mdDialog = $ngMaterial.$new();
    ProductsComponent = $componentController('ProductsCtrl', {
      $scope: scope,
      $ngMaterial: mdDialog
    });
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
