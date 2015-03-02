/**
 * Created by adhingra on 3/1/15.
 */


angular.module("ang-bbnotes").directive("navigationBarDirective",function(){
    return {
        templateUrl: "notes/display/nav-bar.html",
        controller: "navBarController",
        controllerAs: "navBarCtrl"
    }
})