'use strict';

(function(){

class AddproductComponent  {

  constructor($http, $scope) {
    this.$scope = $scope;
    this.$http = $http;
  }
  
  

}

angular.module('adsviewerApp')
  .component('addproduct', {
    templateUrl: 'app/addproduct/addproduct.html',
    controller: AddproductComponent
  });


})();
