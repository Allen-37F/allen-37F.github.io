(function() {

  'use strict';

  angular
    .module('myApp.components.about', [])
    .controller('aboutController', aboutController);

  aboutController.$inject = ['$scope', '$http'];

  function aboutController($scope) {
    /*jshint validthis: true */
    this.greeting = 'This page is currently being used to test Compass, an ad delivery platform created by Rebel AI';


    // simplest http script using jquery - ping a site using $http.get, then print the results, whatever that is. It could just as easily say "if (result) == dispense, then drop"
  //   $http.get('http://google.com')
  //     .then(result => console.log(result))

  }

})();
