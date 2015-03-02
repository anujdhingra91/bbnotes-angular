/**
 * Created by adhingra on 3/1/15.
 */

angular.module("ang-bbnotes").controller("currentPageController",["$location",function($location){
    this.currentPage=$location;
}])