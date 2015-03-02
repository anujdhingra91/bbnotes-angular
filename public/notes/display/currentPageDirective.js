/**
 * Created by adhingra on 3/1/15.
 */

angular.module("ang-bbnotes").directive("currentPageDirective",function(){
    return {
        restrict: "E",
        templateUrl: "notes/display/current-page.html",
        controller: "currentPageController",
        controllerAs: "state"
    }

})