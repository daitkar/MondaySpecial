
function infoServiceDate($rootScope){
    var sharedServiceDate = {};

    sharedServiceDate.message = {};

    sharedServiceDate.prepForBroadcastDate = function(msg) {
        this.message = msg;
        this.broadcastItemDate();
    };

    sharedServiceDate.broadcastItemDate = function() {

        $rootScope.$broadcast('handleBroadcastDate');
    };

    return sharedServiceDate;
}
module.exports =/*@ngInject*/ infoServiceDate;