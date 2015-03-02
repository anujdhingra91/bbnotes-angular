/**
 * Created by adhingra on 3/1/15.
 */

angular.module("ang-bbnotes").service("lastViewedService",function(){
    var lastViewedService,
        currentNote = {},
        currentDateState=false;
    this.date;

    lastViewedService= {
        getSelectedNote: function () {
        return currentNote;
    },

    setSelectedNote: function (note) {
        currentNote = note;
        currentDateState= false;
    },

    clearSelectedNote: function () {
        alert("Removed")
        currentNote = {};
    },

    getCurrentDateState: function(){
      return currentDateState;
    },

    showDate: function(date){
      currentDateState = true;
      this.date = date;
      currentNote = {};
    },

    getCurrentDate: function(){
        return this.date;
    }



}

    return lastViewedService;
})