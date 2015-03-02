/**
 * Created by adhingra on 3/2/15.
 */

angular.module("ang-bbnotes").filter("titleFilter",function(){

    return function(input,wordToRemove){

        return input.replace(new RegExp(wordToRemove,"gi"),"");
    }
})