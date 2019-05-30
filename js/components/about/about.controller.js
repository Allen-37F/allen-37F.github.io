(function() {

  'use strict';

  angular
    .module('myApp.components.about', [])
    .controller('aboutController', aboutController);

  aboutController.$inject = ['$scope', '$http'];

  function aboutController($scope) {
    /*jshint validthis: true */
    this.greeting = 'this is going to be a VAST tag, hopefully, someday';


    // simplest http script using jquery - ping a site using $http.get, then print the results, whatever that is. It could just as easily say "if (result) == dispense, then drop"
  //   $http.get('http://google.com')
  //     .then(result => console.log(result))

  }

})();
