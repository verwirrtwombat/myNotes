UserNotes = new Mongo.Collection('userNotes');

UserNotes.allow({
  insert() { return false; },
  update() { return false; },
  remove() { return false; }
});

UserNotes.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});