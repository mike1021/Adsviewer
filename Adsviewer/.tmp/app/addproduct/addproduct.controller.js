'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var AddproductComponent = function AddproductComponent($http, $scope) {
    _classCallCheck(this, AddproductComponent);

    this.$scope = $scope;
    this.$http = $http;
  };

  angular.module('adsviewerApp').component('addproduct', {
    templateUrl: 'app/addproduct/addproduct.html',
    controller: AddproductComponent
  });
})();
//# sourceMappingURL=addproduct.controller.js.map
