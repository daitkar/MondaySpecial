
var app = angular.module('viajero', [
    'ui.router',
    'ngMessages',
    'ui.select',
    'ui.bootstrap',
 'ui.bootstrap.datetimepicker',
    'ngAnimate',
    'ngSanitize',
    'viajero.globals',
    'viajero.home'


]);
app.config(require('./appRouteConfig.js'));