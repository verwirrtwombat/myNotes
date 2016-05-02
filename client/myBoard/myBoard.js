 Template.myBoard.onCreated( function() {
	Template.instance().subscribe('notes');
});

 Template.myBoard.helpers({
 	notes: function() {
 		email = Meteor.user().emails[0].address;
 		console.log(email)
 		return Notes.find({'email':email});
 	}
 });