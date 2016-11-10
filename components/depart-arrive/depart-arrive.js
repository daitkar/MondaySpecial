function departArriveController($scope, $rootScope, infoServiceDate, $state) {

    $scope.country = ["Boston", "New York", "Chicago", " SanFrancisco"];
    $scope.country.selected= $scope.country[3];

    $scope.showcalendar = function ($event) {
        $scope.showdp = true;
    };

    $scope.showdp = false;

    /*datePicker return date*/
    $scope.showcalendars = function ($event) {
        $scope.dateOption.minDate= new Date($scope.dt);
        $scope.showd = true;
    };
    $scope.showd = false;

    $scope.dateOptions = {
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
    };

    $scope.dateOption = {
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
    };

    /*handle*/
    $scope.handleClicks = function () {
        var departTime=  $scope.dt.toString().slice(0,15);
        var returnTime=  $scope.ds.toString().slice(0,11);
      var information = {
            country: $scope.country.selected,
            departDate: departTime,
            returnDate: returnTime
        };
        infoServiceDate.prepForBroadcastDate(information);
        $state.go('home.confirm');
    };

    $rootScope.$on('handleBroadcast', function () {
        $rootScope.classChange = 2;   
    });
}
module.exports = /*@ngInject*/ departArriveController;