angular.module('userProfiles').controller('MainController', function($scope, mainService) {
    $scope.data = mainService.getter();
    console.log($scope.data);


});
