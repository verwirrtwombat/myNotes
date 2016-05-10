Meteor.subscribe("notes");
Meteor.subscribe("users");

// Notes.allow({
//   insert() { return false; },
//   update() { return false; },
//   remove() { return false; }
// });

// Notes.deny({
//   insert() { return true; },
//   update() { return true; },
//   remove() { return true; }
// });