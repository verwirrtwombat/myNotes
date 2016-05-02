 Template.myBoard.helpers({
        notes: function() {
            email = Meteor.user().email
            console.log(email)
            return Notes.find({'email':email});
        }
        
    });