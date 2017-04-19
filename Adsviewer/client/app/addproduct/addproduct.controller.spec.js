'use strict';

describe('Component: AddproductComponent', function () {

  // load the controller's module
  beforeEach(module('adsviewerApp'));

  var AddproductComponent, scope, ngMaterial;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
   AddproductComponent = $componentController('AddproductComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});


