# Problems

These can be done in any order and don't depend on each other.
If you get stuck on one, try moving on to another.

1. Prevent editing an individual note from updating that
 note's title in the notes list
2. Prevent submission of an empty title/text note. You can
 do this with the Browser's built-in validation, but
 try to use Anglular's [very nice built-in form validation](https://docs.angularjs.org/guide/forms)
3. When you finish editing or adding a note (i.e. it is
 saved to the server), redirect to the notes list.
 You can see how the Edit controller redirects when you try
 to view a note that does not exist.
4. Use a directive to display the navigation bar
5. Create a directive that displays last-viewed note (both
 the title and text) at all times. You can view a note by
 clicking on its title in the list.  Even if you navigate
 to the homepage, this "last viewed note" should still
 appear. If you use `$rootScope` to do this, you're fired.
6. On the homepage, add the time. Clicking on the time
 should make it display in the "last viewed" spot.
7. Update this directive so that it has an X button. For
 "last viewed note," it should delete the note and display
 "REMOVED." For the time, it should just hide the display.

EXTRA: This is a hard one, but it is possible (one solution
involves using deffereds, `$q` in the service).

When a user goes directly to `/notes/:id` on a page load,
they will be redirected to `/notes` because no notes are
loaded so that note is not there. Get `/notes/:id` to work
on an initial page load too.
