'use strict';

describe('Controller: CotizacionesCtrl', function() {
  // load the controller's module
  beforeEach(module('adsviewerApp.cotizaciones'));

  var CotizacionesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    CotizacionesCtrl = $componentController('CotizacionesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});


