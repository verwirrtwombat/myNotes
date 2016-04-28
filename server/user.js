Meteor.publish('userNotes', function( userID ) {

	if(userID){
		return [
      		UserNotes.find( { 'userID': userID } ),
    	];
	} 
  	else {
	    return null;
	}
});  
