'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])

.controller('kontroler', function($scope){
  $scope.welcome = "Witaj AngularJS";
  $scope.welcome2 = "To jest moj pierwszy projekt";
});
