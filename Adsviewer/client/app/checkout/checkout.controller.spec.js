'use strict';

describe('Component: CheckoutComponent', function() {
  // load the controller's module
  beforeEach(module('adsviewerApp.checkout'));

  var CheckoutComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController, $rootScope) {
    scope = $rootScope.$new();
    CheckoutComponent = $componentController('checkoutCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
