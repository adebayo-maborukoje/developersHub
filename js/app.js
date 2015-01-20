var yearbookAPP = angular.module('yearbookAPP', ['ngRoute']);


yearbookAPP.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){ 
  $locationProvider.html5Mode(true);
  $routeProvider.
  when('/home', {
    templateUrl:'/partials/home.html',
    controller: 'homeCtrl'
  })
  .when('/repos', {
    templateUrl: '/partials/repository.html',
    controller: 'reposCtrl'
  })
  .when('/form', {
    templateUrl: '/partials/form.html',
    controller : 'formController'
  })
  // .when('/login', {
  //   templateUrl: '/partials/login.html',
  //   controller:'loginCtrl'
  // })
  .when('/:username', {
    templateUrl: '/partials/member.html',
    controller: 'memberCtrl'
  })
  .otherwise({
    redirectTo: '/home'
  });

}]);