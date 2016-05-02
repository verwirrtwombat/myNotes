 Template.myBoard.helpers({
        notes: function() {
            userID = Meteor.user().userID
            console.log(userID)
            return Notes.find({'userID':userID});
        }
        
    });