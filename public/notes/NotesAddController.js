angular.module("ang-bbnotes").controller("NotesAddController", ["notes",
function (notes) {
    this.note = {};

    this.save = function (note) {
        notes.saveNote(note);
    };
}]);
