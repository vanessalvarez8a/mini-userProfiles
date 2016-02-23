app.controller('MainController', ['$scope', 'mainService', function($scope, mainService) {
$scope.users = mainService.getUsers(); // not really a function is a $scope variable

}]);