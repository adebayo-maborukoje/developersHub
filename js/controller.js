var yearbookAPP = angular.module('yearbookAPP');
var urlBase =  'https://andela-yearbook.herokuapp.com/yearBook/';

yearbookAPP.controller('homeCtrl', function ($scope, $http){
 console.log("HOME CONTROLLER");

});

yearbookAPP.controller('reposCtrl', function ($scope, $http){
    $http.get(urlBase).success(function(data){
       $scope.lists = data;
        console.log($scope.lists);
      });
});

yearbookAPP.controller('formController', function ($scope, $http, $location){
 $scope.submit = function (newUser) {
      $http({
          method: 'POST',
          url: urlBase,
          data : $.param(newUser),
          headers : {'Content-Type': 'application/x-www-form-urlencoded'}

      }).success(function(){
          console.log(newUser)
          $scope.report="CREATED SUCCESSFULLY";
          console.log("got here");
      }).error(function (err){
        $scope.report ="Error Processing your Form";
      });
    } 
});

yearbookAPP.controller('memberCtrl', function ($scope, $http, $routeParams, $location){
  var query = $routeParams.username;
  console.log(urlBase+query);
  var url = urlBase+query;
  $http.get(url).success(function(data, status){
    if (status !== 200 || data.status === 404){
         $location.path('/home');
        // console.log(status, data.status)
    }else{
        console.log(status);
        $scope.member = data;
        console.log($scope.member);
     }
  });
});

// yearbookAPP.controller('editCtrl', function ($scope, $http, $location, $routeParams){
//    var query = $scope.username;
//    var url = urlBase+query;
//    $http.get(url).success(function(data){
//        $scope.userCreate = data;
//         console.log($scope.userCreate);
//     });

//   $scope.submit = function (editedUser){
//     $http({
//       method: 'PUT',
//       url: url,
//       data: $.param(editeduser),
//       header: {'Content-Type': 'application/x-www-form-urlencoded'}
//       }).success(function(user){
//        $location.url('/:username');
//       }).error(function(){
//         $scope.report = "ERROR EDITING PAGE";
//     });
//   }
// });

yearbookAPP.controller('loginCtrl', function($scope, $http, $routeParams, $location){
  $scope.submit = function (){
    $http({
      method: 'POST',
      url: urlBase,
      data: $.param ({
        username: $scope.username,
        password: $scope.password
        }),
      header: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).success(function(user){
      $location.url('/edit')
    }).error(function(){
      $scope.report = "USERNAME OR PASSWORD INCORRECT";
    });
  }
});