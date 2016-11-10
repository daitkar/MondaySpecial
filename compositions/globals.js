

angular.module('viajero.globals',[])
    .controller('homeController',require( '../components/home/homeController'))
    .service( 'infoService', require( '../components/globals/infoService.js') )
    .service( 'infoServiceDate', require( '../components/globals/info-service-date') );



