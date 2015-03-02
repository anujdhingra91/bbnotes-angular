/**
 * Created by adhingra on 3/1/15.
 */

angular.module("ang-bbnotes").directive("lastViewedDirective",function(){
    return{
        restrict: "E",
        templateUrl: "notes/display/last-viewed.html",
        controller: "lastViewedController",
        controllerAs: "lv",
        scope: {
            "note": "=noteItem"
        }
    }
})