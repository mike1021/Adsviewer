
'use strict';
(function(){

class ProductsComponent {
  //static $inject = ['$http','$scope','$mdDialog','filepicker','$mdMedia'];
  constructor($http, $scope, Auth, $mdDialog, $mdMedia, filepicker) {
    
    this.$scope = $scope;
    this.$http = $http;
    this.Auth = Auth;
    this.$mdDialog = $mdDialog;
    this.$mdMedia= $mdMedia;
    this.getCurrentUser = Auth.getCurrentUser;
    $scope.files = {
    };
    $scope.performUpload = false;
    $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
    $scope.status = '  ';
    $scope.filter='none';
     $http.get('/api/products')
      .success(function(data) {
        $scope.products = data;
        $scope.originalProducts = data;
        //console.log($scope.eventos);
      })
        .error(function(err) {
          console.log('Error! Problema de conexión', err);
        });
  }
  edit(product){
     var title; if(product.name){ title = 'Editando ' + product.name;} else{ title = 'Agregar nuevo';}
      Modal.show(product,{title:title, api:'Product', columns: cols});
  }
  addNewProduct(){
    console.log('prueba agregar');
    var that=this;
    var dt1 = new Date();
    var utcDate = dt1;
    console.log(that.getCurrentUser);
    //var currentUser =that.getCurrentUser;
    that.$scope.newproduct.updated = utcDate;
    that.$scope.newproduct.uid = that.getCurrentUser().name;
    that.$http.post('/api/products', that.$scope.newproduct)
    .success(function (){
      that.$scope.products.push(that.$scope.newproduct);
      that.$scope.newproduct = {};
    })
    .error(function(error){
      console.log('Error');
    }); 
  }
  delete(index) {
      var that=this;
      //console.log(banner);
       that.$http.delete('/api/products/'+ that.$scope.products[index]._id)
       .success(function(){
        that.$scope.products.splice(index,1);
       })
       .error(function(err){
        console.log('Error',err);
       });
    }
  toggleEdit(index){
    var that=this;
    that.$scope.products[index].edit= !that.$scope.products[index].edit;
  }
  saveProducts(index){
    var that=this;
    that.$http.put('/api/products/' + that.$scope.products[index]._id, that.$scope.products[index])
    .success(function() {
      that.$scope.products[index].edit = false;
    })
    .error(function(err){
      console.log('Error');
    });
  }
  reset(){
    var that = this;
    that.$scope.products = that.$scope.originalProducts;
    that.$scope.filter = 'none';
  }
  filterByEventos(name){
    var that=this;
    that.resetEventos();
    that.$scope.eventos = that.$scope.eventos.filter(function(evento){
      return evento.name === name;
    });
    that.$scope.filter = 'Nombre: '+ name; 
  }
  save(product){
      if('_id' in product){
          Product.update({ id:$scope.product._id }, $scope.product).$promise.then(function() {
            toastr.success("Product info saved successfully","Success");
          }, function(error) { // error handler
            var err = error.data.errors;
            toastr.error(err[Object.keys(err)].message,err[Object.keys(err)].name);
          });
        }
        else{
          Product.save($scope.product).$promise.then(function() {
            toastr.success("Product info saved successfully","Success");
          }, function(error) { // error handler
              var err = error.data.errors;
              toastr.error(err[Object.keys(err)].message,err[Object.keys(err)].name);
          });
        }
    }
    changeActive(b){ // success handler
      b.active = !b.active;
      Product.update({ id:b._id }, b).$promise.then(function() {

      }, function(error) { // error handler
          // console.log(error);
          toastr.error(error.statusText + ' (' +  error.status + ')');
          b.active = !b.active;
      });
    }

 
 
}

  angular.module('adsviewerApp')
  .component('products', {
    templateUrl: 'app/products/products.html',
    controller: ProductsComponent
  })
  .config(function (filepickerProvider){
    filepickerProvider.setKey('AZby333WhT5Wkm6tWskTOz');
  });;

})();
