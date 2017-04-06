'use strict';

describe('Controller: AdCtrl', function() {
  // load the controller's module
  beforeEach(module('adsviewerApp.ad'));

  var AdCtrl, scope, mdDialog;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller  $rootScope,) {
   // AdCtrl = $controller('AdCtrl', {});
     scope = $rootScope.$new();
    mdDialog = $ngMaterial.$new();
   AdCtrl = $componentController('AdCtrl', {
      $scope: scope,
      $ngMaterial: mdDialog
    });
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
