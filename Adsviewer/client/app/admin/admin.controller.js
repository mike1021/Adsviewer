'use strict';

(function() {

  class AdminController {
    constructor(User, $http) {
      // Use the User $resource to fetch all users
       this.$http = $http;
      this.users = User.query();
    }

    delete(user) {
      user.$remove();
      this.users.splice(this.users.indexOf(user), 1);
    }
    toggleEdit(index){
      var that=this;
      this.users[index].edit= !this.users[index].edit;
    }
    save(index){
      //user.$save(user);
      that=this;
      console.log(index);
       that.$http.put('/api/users/' + this.users[index]._id, this.users[index])
      .success(function() {
        console.log("falla");
        this.users[index].edit = false;
      })
      .error(function(err){
        console.log('Error');
      });
    }
  }

  angular.module('adsviewerApp.admin')
    .controller('AdminController', AdminController);
})();

