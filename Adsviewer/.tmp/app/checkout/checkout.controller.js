'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var CheckoutComponent = function () {
    //static $inject = ['$http','$scope','$mdDialog','filepicker','$mdMedia'];
    function CheckoutComponent($http, $scope, Auth, ngCart) {
      _classCallCheck(this, CheckoutComponent);

      this.$scope = $scope;
      this.$http = $http;
      this.Auth = Auth;
      this.getCurrentUser = Auth.getCurrentUser;
      //cart = ngCart;
      //this.cart = ngCart;
      //this.ngCart = ngCart.$cart;
      var cart = ngCart; //.$cart;
      var cartera = [];
      $scope.files = {};
      console.log(cart);
      $scope.cart = cart;

      /*$http.get('/api/products')
       .success(function(data) {
         $scope.products = data;
         $scope.originalProducts = data;
         //console.log($scope.eventos);
       })
         .error(function(err) {
           console.log('Error! Problema de conexión', err);
         });*/
    }

    _createClass(CheckoutComponent, [{
      key: 'add',
      value: function add() {
        var dt1 = new Date();
        var utcDate = dt1;
        cartera.product = cart.getItems();
        cartera.Total = cart.getSubTotal() * 1.16;
        cartera.subTotal = cart.getSubTotal();
        cartera.iva = cart.getSubTotal() * .16;
        cartera.cotizacionDate = utcDate;
        cartera.orderID = that.getCurrentUser().name;
        cartera.name = cartera.nombrecliente;
        cartera.mail = cartera.emailcliente;
        that.$http.post('/api/cotizaciones', cartera).success(function () {
          cartera = [];
          cart;
        }).error(function (error) {
          console.log('Error');
        });
      }
    }, {
      key: 'edit',
      value: function edit(product) {
        var title;if (product.name) {
          title = 'Editando ' + product.name;
        } else {
          title = 'Agregar nuevo';
        }
        Modal.show(product, { title: title, api: 'Product', columns: cols });
      }
    }, {
      key: 'addNewProduct',
      value: function addNewProduct() {
        console.log('prueba agregar');
        var that = this;
        var dt1 = new Date();
        var utcDate = dt1;
        console.log(that.getCurrentUser);
        //var currentUser =that.getCurrentUser;
        that.$scope.newproduct.updated = utcDate;
        that.$scope.newproduct.uid = that.getCurrentUser().name;
        that.$http.post('/api/products', that.$scope.newproduct).success(function () {
          that.$scope.products.push(that.$scope.newproduct);
          that.$scope.newproduct = {};
        }).error(function (error) {
          console.log('Error');
        });
      }
    }, {
      key: 'delete',
      value: function _delete(index) {
        var that = this;
        //console.log(banner);
        that.$http.delete('/api/products/' + that.$scope.products[index]._id).success(function () {
          that.$scope.products.splice(index, 1);
        }).error(function (err) {
          console.log('Error', err);
        });
      }
    }, {
      key: 'toggleEdit',
      value: function toggleEdit(index) {
        var that = this;
        that.$scope.products[index].edit = !that.$scope.products[index].edit;
      }
    }, {
      key: 'saveProducts',
      value: function saveProducts(index) {
        var that = this;
        that.$http.put('/api/products/' + that.$scope.products[index]._id, that.$scope.products[index]).success(function () {
          that.$scope.products[index].edit = false;
        }).error(function (err) {
          console.log('Error');
        });
      }
    }, {
      key: 'reset',
      value: function reset() {
        var that = this;
        that.$scope.products = that.$scope.originalProducts;
        that.$scope.filter = 'none';
      }
    }, {
      key: 'filterByEventos',
      value: function filterByEventos(name) {
        var that = this;
        that.resetEventos();
        that.$scope.eventos = that.$scope.eventos.filter(function (evento) {
          return evento.name === name;
        });
        that.$scope.filter = 'Nombre: ' + name;
      }
    }, {
      key: 'save',
      value: function save(product) {
        if ('_id' in product) {
          Product.update({ id: $scope.product._id }, $scope.product).$promise.then(function () {
            toastr.success("Product info saved successfully", "Success");
          }, function (error) {
            // error handler
            var err = error.data.errors;
            toastr.error(err[Object.keys(err)].message, err[Object.keys(err)].name);
          });
        } else {
          Product.save($scope.product).$promise.then(function () {
            toastr.success("Product info saved successfully", "Success");
          }, function (error) {
            // error handler
            var err = error.data.errors;
            toastr.error(err[Object.keys(err)].message, err[Object.keys(err)].name);
          });
        }
      }
    }, {
      key: 'changeActive',
      value: function changeActive(b) {
        // success handler
        b.active = !b.active;
        Product.update({ id: b._id }, b).$promise.then(function () {}, function (error) {
          // error handler
          // console.log(error);
          toastr.error(error.statusText + ' (' + error.status + ')');
          b.active = !b.active;
        });
      }
    }]);

    return CheckoutComponent;
  }();

  angular.module('adsviewerApp').component('checkout', {
    templateUrl: 'app/checkout/checkout.html',
    controller: CheckoutComponent
  });
})();
//# sourceMappingURL=checkout.controller.js.map
