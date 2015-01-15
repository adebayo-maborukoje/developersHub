var yearbookAPP = angular.module('yearbookAPP', ['ngRoute']);


yearbookAPP.config(['$routeProvider', function($routeProvider){  
  $routeProvider.
  when('/home', {
    templateUrl:'/partials/home.html',
    controller: 'homeCtrl'
  }).
  when('/form', {
    templateUrl: 'partials/form.html',
    controller : 'formController'
  }).
  when('/:username', {
    templateUrl: 'partials/member.html',
    controller: 'memberCtrl'
  }).
  otherwise({
    redirectTo: '/home'
  });

}]);