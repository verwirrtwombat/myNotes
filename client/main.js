UserNotes = new Mongo.Collection('userNotes');

if (Meteor.isClient) {
	Template.body.helpers({
		userNotes: function() {
			return UserNotes.find();
		}
	});
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}