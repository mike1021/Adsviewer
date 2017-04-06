'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var AdminController = function () {
    function AdminController(User, $http) {
      _classCallCheck(this, AdminController);

      // Use the User $resource to fetch all users
      this.$http = $http;
      this.users = User.query();
    }

    _createClass(AdminController, [{
      key: 'delete',
      value: function _delete(user) {
        user.$remove();
        this.users.splice(this.users.indexOf(user), 1);
      }
    }, {
      key: 'toggleEdit',
      value: function toggleEdit(index) {
        var that = this;
        this.users[index].edit = !this.users[index].edit;
      }
    }, {
      key: 'save',
      value: function save(index) {
        //user.$save(user);
        that = this;
        console.log(index);
        that.$http.put('/api/users/' + this.users[index]._id, this.users[index]).success(function () {
          console.log("falla");
          this.users[index].edit = false;
        }).error(function (err) {
          console.log('Error');
        });
      }
    }]);

    return AdminController;
  }();

  angular.module('adsviewerApp.admin').controller('AdminController', AdminController);
})();
//# sourceMappingURL=admin.controller.js.map
