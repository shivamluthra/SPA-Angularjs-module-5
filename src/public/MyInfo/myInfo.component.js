(function() {
  "use strict";

  angular.module('public')
  .component('myInfo', {
    templateUrl: 'src/public/MyInfo/my-info.html',
    bindings: {
      info: '<'
    }
  });
})()
