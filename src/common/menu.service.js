(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  var userData = [];

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getFavItems = function(short_name) {
    // return http.get(ApiPath + '/menu_items/'+short_name+'.json').
    // then(function(response) {
    var response = $http ({
      method : "GET",
      url : ApiPath + '/menu_items/'+short_name+'.json'
    });
    // return response;

      // console.log(response);
      return response;
    // });
  }
    service.saveUserData = function(fname,lname,email,phone,fav,name,description){

        userData = [];
        var data = {
          FirstName: fname,
          LastName: lname,
          Email: email,
          Phone: phone,
          MenuNo: fav,
          Title: name,
          Description: description,
          imagepath: ApiPath + "/images/" + fav + ".jpg"
        };
        userData.push(data);
        // console.log(data);
        return true;
    };

    service.getUserData = function() {
      // console.log(userData);
      return userData;
    };

}



})();
