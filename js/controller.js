var yearbookAPP = angular.module('yearbookAPP');
var urlBase =  'https://andela-yearbook.herokuapp.com/yearBook/';
// var urlBase = 'https://lagbusstops.herokuapp.com/api'
yearbookAPP.controller('homeCtrl', function ($scope, $http){
  // $scope.getData = function(){

    $http.get(urlBase).success(function(data){
       $scope.lists = data;
        console.log($scope.lists);
      });



// scope.modalUpdate = function (size) {

//    var modalInstance = $modal.open({
//      templateUrl: 'partials/form.html',
//      controller: function ($scope, $modalInstance) {
       
//        $scope.ok = function () {
//            $modalInstance.close();
//        };

//        $scope.cancel = function () {
//          $modalInstance.dismiss('cancel');
//        };
//      },
//      size: size,
//      resolve: {
//        book: function () {
//          return selected;
//        }
//      }
//    });

//    modalInstance.result.then(function (selectedItem) {
//      $scope.selected = selectedItem;
//    }, function () {
//      $log.info('Modal dismissed at: ' + new Date());
//    });
//  };
});

// $scope.postData = function(){
//     $http(
//       {
//       method  : 'POST',
//       url     : 'https://lagbusstops.herokuapp.com/api',
//       data    : $.param({name:$scope.bustop, region:$scope.region}),  
//       headers : {'Content-Type': 'application/x-www-form-urlencoded'}
//     }).success(function () {
//         console.log('Item edited');
//     }).error(function () {
//         console.log('Error occured');
//       });
//   };

// yearbookAPP.controller('formController', function ($scope, $http, fileUpload){
yearbookAPP.controller('formController', function ($scope, $http){

  $scope.submit =  function (){
     
      $http({
          method: 'POST',
          url: urlBase,
          data : $.param(
            {
                firstname: $scope.first_name,
                lastname: $scope.last_name,
                // email: $scope.email,
                username: $scope.username,
                nickname: $scope.nickname,
                occupation:$scope.occupation,
                organisation:$scope.organisation,
                marital:$scope.marital,
                graduation: $scope.graduation,
                birthday: $scope.birthday,
                mobile: $scope.mobile,
                hobbies: $scope.hobbies
                // bio: $scope.bio
            }),
          headers : {'Content-Type': 'application/x-www-form-urlencoded'}
      }).success(function(){

        // console.log(birthday + graduation + firstname);
        // var file = $scope.fileToUpload;
        // var uploadUrl = 'https://andela-yearbook.herokuapp.com/yearBook/uploads';
        // fileUpload.uploadFileToUrl(file, uploadUrl);
       console.log("got here");
      }).error(function (err){
        console.log("error occurred here");
        
      });
  };
});

yearbookAPP.controller('memberCtrl', function ($scope, $http, $routeParams){
  var query = $routeParams.username;
  console.log(urlBase+query);
  var url = urlBase+query;
  $http.get(url).success(function(data){
  $scope.member = data;
  console.log($scope.member);
// }).error(function (err, status){
//   $scope.member = err;
//   return;
 });
});

// yearbookAPP.directive('fileModel', ['$parse', function ($parse) {
//     return {
//         restrict: 'A',
//         link: function(scope, element, attrs) {
//             var model = $parse(attrs.fileModel);
//             var modelSetter = model.assign;
            
//             element.bind('change', function(){
//                 scope.$apply(function(){
//                     modelSetter(scope, element[0].files[0]);
//                 });
//             });
//         }
//     };
// }]);

// yearbookAPP.service('fileUpload', ['$http', function ($http) {
//     this.uploadFileToUrl = function(file, uploadUrl){
//         var fd = new FormData();
//         fd.append('file', file);
//         $http.post(uploadUrl, fd, {
//             transformRequest: angular.identity,
//             headers: {'Content-Type': undefined}
//         })
//         .success(function(){
//         })
//         .error(function(){
//         });
//     }
// }]);