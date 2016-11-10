
function appViewRouteConfig($stateProvider, $urlRouterProvider) {
    'ngInject';

    var homeController = require('./components/home/homeController');
    var userInfoController = require('./components/user-info/user-info');
    var departAndArriveController = require('./components/depart-arrive/depart-arrive');
    var confirmController = require('./components/confirmation/confirm');

    $urlRouterProvider.otherwise('/home/userInfo');
    $stateProvider
        .state('home', {
            url: '/home',
            template: require('./components/home/home.html'),
            controller: homeController

        })
        .state('home.userInfo', {
            url: '/userInfo',
            template: require('./components/user-info/user-info.html'),
            controller: userInfoController

        })
        .state('home.datePick', {
        url: '/datePick',
        template: require('./components/depart-arrive/depart-arrive.html'),
        controller: departAndArriveController

    })
        .state('home.confirm', {
            url: '/confirm',
            template: require('./components/confirmation/confirm.html'),
            controller: confirmController
        })

}

module.exports = appViewRouteConfig;