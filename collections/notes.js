Notes = new Mongo.Collection('notes');

//  Meteor.publish('notes', function( userID ) {
// 	if(userID) {
// 		return [
// 			Notes.find( {'userID' : userID} ),
// 		];
// 	}
// 	else {
// 		return null;
// 	}
// });

// Meteor.publish('notes', function( email ) {
// 	if(email) {
// 		return [
// 			Notes.find( {'email' : email} ),
// 		];
// 	}
// 	else {
// 		return null;
// 	}
// });