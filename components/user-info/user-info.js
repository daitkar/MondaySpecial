function userInfoController($scope, $rootScope, infoService, $state) {

/*next button click*/
    $scope.handleClick = function () {
        /*stored all userpage info in array object*/
     var   info = {
            name: $scope.name,
            lastName: $scope.LastName,
            email: $scope.email,
            phone: $scope.phone
        };

        infoService.prepForBroadcast(info);
        $state.go('home.datePick')
    };

    /*and broadcast to service*/
    $rootScope.$on('handleBroadcast', function () {
        $scope.message = infoService.message;
        $rootScope.classChange = 1;
    });
}
module.exports = /*@ngInject*/ userInfoController;