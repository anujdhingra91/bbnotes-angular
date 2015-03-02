/**
 * Home page functionality (currently there is none)
 */
angular.module("ang-bbnotes").controller("HomeController",["lastViewedService", function (lastViewedService) {

    this.date = new Date();
    
    this.showCurrentDate=function(){
        lastViewedService.showDate(this.date);
    }
}]);
