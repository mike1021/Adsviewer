'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var CotizacionesComponent = function CotizacionesComponent($http, $scope) {
    _classCallCheck(this, CotizacionesComponent);

    this.$scope = $scope;
    this.$http = $http;
    $scope.status = '  ';
    $scope.filter = 'none';
    // $scope.cotizar=data;
    $http.get('/api/products').success(function (data) {
      $scope.products = data;
      $scope.originalProducts = data;
      //console.log($scope.eventos);
    }).error(function (err) {
      console.log('Error! Problema de conexión', err);
    });
  }

  /*addCartelera() {
  console.log('prueba agregar');
  var that=this;
  var aux = that.$scope.newCartelera;
  aux.active=false;
  that.$http.post('/api/carteleras',aux)
  .success(function (){
    that.$scope.carteleras.push(aux);
    that.$scope.newCartelera = {};
  })
  .error(function(error){
    console.log('Error');
  }); 
  }
  deleteCartelera(index) {
    var that=this;
    //console.log(cartelera);
     that.$http.delete('/api/carteleras/'+ that.$scope.carteleras[index]._id)
     .success(function(){
      that.$scope.carteleras.splice(index,1);
     })
     .error(function(err){
      console.log('Error',err);
     });
  }
  toggleEdit(index){
    var that=this;
    that.$scope.carteleras[index].edit= !that.$scope.carteleras[index].edit;
  }
  saveCartelera(index){
    var that=this;
    console.log(that.$scope.carteleras[index]);
    that.$http.put('/api/carteleras/' + that.$scope.carteleras[index]._id, that.$scope.carteleras[index])
    .success(function() {
      that.$scope.carteleras[index].edit = false;
    })
    .error(function(err){
      console.log('Error');
    });
  }
  resetCarteleras(){
    var that = this;
    that.$scope.carteleras = that.$scope.originalcarteleras;
    that.$scope.filter = 'none';
  }
  filterByCartelera(name){
    var that=this;
    that.resetCarteleras();
    that.$scope.carteleras = that.$scope.carteleras.filter(function(cartelera){
      return cartelera.name === name;
    });
    that.$scope.filter = 'Nombre: '+ name; 
  }*/

  ;

  angular.module('adsviewerApp').component('cotizaciones', {
    templateUrl: 'app/cotizaciones/cotizaciones.html',
    controller: CotizacionesComponent
  });
})();
//# sourceMappingURL=cotizaciones.controller.js.map
