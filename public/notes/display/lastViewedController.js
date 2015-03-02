angular.module("ang-bbnotes").controller("lastViewedController",["lastViewedService",function(lastViewedService){


 this.showDate= function(){
    return lastViewedService.getCurrentDateState();
    }

 this.getSelectedNote=function(){
    return lastViewedService.getSelectedNote();
 }

    this.getCurrentDate=function(){
        return lastViewedService.getCurrentDate();
    }

}])