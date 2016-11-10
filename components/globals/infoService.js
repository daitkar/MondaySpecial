
function infoService($rootScope){
    var sharedService = {};

    sharedService.message = {};

    sharedService.prepForBroadcast = function(msg) {
        console.log(msg);
        this.message = msg;
        this.broadcastItem();
    };

    sharedService.broadcastItem = function() {

        $rootScope.$broadcast('handleBroadcast');
    };

    return sharedService;
}
module.exports =/*@ngInject*/ infoService;