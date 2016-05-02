Template.navBar.events({
    'click .logout' : function(event) { 
        event.preventDefault();

        Meteor.logout(function(err) {
        	Session.set("ses", false);       
        });
        
        Router.go('home');
    }
});