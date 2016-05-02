import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

	Meteor.methods({
		'create': function(userID, email, password) {
			Accounts.createUser({
				userID : userID,
				email : email,
				password : password
			});
		},
	});
})