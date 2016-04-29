Template.userNote.onCreated( function() {
    Meteor.subscribe('allUserNotes');
});

Template.userNote.events( {
        'submit form': function(event,template) {
            event.preventDefault();
            
            let userNote = {
                'userID' : Meteor.userId(),
                'title' : template.find('#title').value,
                'content' : template.find('#content').value,
                'keywords' : template.find('#keywords').value
            }

            Meteor.call('addNotes', userNote);
                        if(error){
                console.log(error);
            }  
            else {
                Router.go(userBoard);
            }
        }
    });

plate.userNote.helpers({    
   
    'userNotes': function(){
        return UserNotes.findOne({'userID' : Meteor.userId()});
    },
});