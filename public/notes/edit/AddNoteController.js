angular.module("ang-bbnotes").controller("AddNoteController", ["notes","$state",
function (notes,$state) {
    this.note = {};

    this.save = function (note) {
        note.title = this.currentNoteTitle;
        notes.saveNote(note);
        return $state.go("notes");
    };
}]);
