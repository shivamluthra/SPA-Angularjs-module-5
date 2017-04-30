(function() {
  "use strict";

  angular.module('public')
  .controller('newsletterController', newsletterController);

  newsletterController.$inject = ['MenuService'];

  function newsletterController(MenuService) {
    var newsCtrl = this;
    // newsCtrl.$onInit = function(){
    //   newsCtrl.msg = false;
    // };

    newsCtrl.submit = function() {
        console.log(newsCtrl.user.fav);

        // try {
        //   newsCtrl.itemInfo = MenuService.getFavItems(newsCtrl.user.fav);
        //   if(newsCtrl.itemInfo)
        //   {
        //     newsCtrl.InvalidNo = false;
        //     console.log("Items", newsCtrl.itemInfo);
        //     newsCtrl.msg = MenuService.saveUserData(newsCtrl.user.fname,
        //     newsCtrl.user.lname, newsCtrl.user.email, newsCtrl.user.phone, newsCtrl.user.fav);
        //   }
        // } catch (e) {
        //     console.log("Error");
        //     newsCtrl.InvalidNo = true;
        //     newsCtrl.msg = false;
        // }
        var promise = MenuService.getFavItems(newsCtrl.user.fav);
        // console.log("PROMISE", promise);
        promise.then(function(response) {

          var data = response.data;
          console.log("DATA", data.name);
          newsCtrl.user.favname = data.name;
          newsCtrl.user.favDesc = data.description;
          newsCtrl.InvalidNo = false;
          newsCtrl.msg = MenuService.saveUserData(newsCtrl.user.fname,
            newsCtrl.user.lname, newsCtrl.user.email, newsCtrl.user.phone, newsCtrl.user.fav,
            newsCtrl.user.favname, newsCtrl.user.favDesc);
        })
        .catch(function(error) {
          console.log("Eooro");
          newsCtrl.InvalidNo = true;
          newsCtrl.msg = false;
        });
    };

    newsCtrl.saveData = function(){
      console.log("inside ctrl data");
      MenuService.saveUserData();
    }
  }
})();
