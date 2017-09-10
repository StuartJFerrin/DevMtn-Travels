angular.module('devmtnTravel').controller('bookedCtrl', function ($scope, mainSrv, $stateParams) {
    console.log($stateParams);
$scope.package = mainSrv.getOnePackage($stateParams.id)
console.log($scope.package);
});