(function() {
"use strict";

  angular.module('public')
  .controller('myInfoController', myInfoController);

  myInfoController.$inject = ['MenuService'];
  function myInfoController(MenuService) {

    var infoCtrl = this;

    infoCtrl.UserInfo = MenuService.getUserData();
    console.log(infoCtrl.UserInfo);
    if(infoCtrl.UserInfo.length < 1)
      infoCtrl.SignUp = true;
    else
      infoCtrl.SignUp = false;
  }
})();
