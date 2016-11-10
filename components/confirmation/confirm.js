function confirmController($scope, infoService, infoServiceDate, $rootScope, $http, $state) {

    /*geting value of  user-info page from infoService */
    $scope.$on('handleBroadcast', function () {
        $scope.message = infoService.message;

    });

    /*geting value 0f depart-arrive page from info-service-date*/
    $scope.$on('handleBroadcastDate', function () {
        $scope.messages = infoServiceDate.message;

    });

    infoService.broadcastItem();
    infoServiceDate.broadcastItemDate();

    $scope.submit = function () {

        var to, subject, text;
        to = $scope.message.email;
        alert("Email is been sent at " + to + " . Please check inbox !");
        subject = "Travele booking confirm!!!!";

        html = '<pre>' + $scope.message.name + '  ' + $scope.message.lastName + ' (' + $scope.message.phone + ') will' +
            'depart from' + $scope.messages.country + ' on'+' ' + $scope.messages.departDate + 'and  return on ' +
            $scope.messages.returnDate + ' </pre>';

        console.log("Sending E-mail...Please wait");

        $.get("http://localhost:3000/send", {to: to, subject: subject, html: html}, function (data) {
            if (data == "sent") {
                console.log("Email is been sent at " + to + " . Please check inbox !");
                alert("Email is been sent at " + to + " . Please check inbox !");
            }

        });
        $state.go('home.userInfo')
    }

}
module.exports = /*@ngInject*/ confirmController;