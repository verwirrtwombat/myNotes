Meteor.publish('userNote', function( userID ) {

	if(userID){
		return [
			UserNotes.find( { 'id': userID } ),
		];
	}
	else {
		return null;
	}
});

Meteor.publish('allUserNotes', function() {
	return UserNotes.find();
});

Meteor.publish('userNotesByUserID', function( userID ) {
	
	return UserNotes.find( { 'userID': userID } ); 
	
});  
