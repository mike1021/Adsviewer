'use strict';

(function(){

class AdComponent {

  constructor($http, $scope, $mdMedia, filepicker) {
    this.$scope = $scope;
    this.$http = $http;
    this.$mdMedia= $mdMedia;
    //this.filepickerProvider.setKey('AZby333WhT5Wkm6tWskTOz');
    //this.Upload=Upload;
    $scope.files = {
    };
    $scope.performUpload = false;

    $scope.status = '  ';
    $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
    $scope.filter='none';
     $http.get('/api/ads')
      .success(function(data) {
        $scope.ads = data;
        $scope.originalads = data;
        //console.log($scope.eventos);
      })
        .error(function(err) {
          console.log('Error! Problema de conexión', err);
        });
  }
  addad() {
    console.log('prueba agregar');
    var that=this;
    var aux = that.$scope.newad;
    aux.active=false;
    that.$http.post('/api/ads',aux)
    .success(function (){
      that.$scope.ads.push(aux);
      that.$scope.newad = {};
    })
    .error(function(error){
      console.log('Error');
    }); 
  }
  deletead(index) {
      var that=this;
      //console.log(ad);
       that.$http.delete('/api/ads/'+ that.$scope.ads[index]._id)
       .success(function(){
        that.$scope.ads.splice(index,1);
       })
       .error(function(err){
        console.log('Error',err);
       });
    }
    toggleEdit(index){
      var that=this;
      that.$scope.ads[index].edit= !that.$scope.ads[index].edit;
    }
    savead(index){
      var that=this;
      console.log(that.$scope.ads[index]);
      that.$http.put('/api/ads/' + that.$scope.ads[index]._id, that.$scope.ads[index])
      .success(function() {
        that.$scope.ads[index].edit = false;
      })
      .error(function(err){
        console.log('Error');
      });
    }
    resetads(){
      var that = this;
      that.$scope.ads = that.$scope.originalads;
      that.$scope.filter = 'none';
    }
    filterByad(name){
      var that=this;
      that.resetads();
      that.$scope.ads = that.$scope.ads.filter(function(ad){
        return ad.name === name;
      });
      that.$scope.filter = 'Nombre: '+ name; 
    }
 
}

angular.module('adsviewerApp')
  .component('ad', {
    templateUrl: 'app/ad/ad.html',
    controller: AdComponent
  })
  .config(function (filepickerProvider){
    filepickerProvider.setKey('AZby333WhT5Wkm6tWskTOz');
  });


})();
