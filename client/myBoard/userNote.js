Template.userNote.onCreated( function() {
    Meteor.subscribe('userNotes');
});

Template.userNote.events({
        'submit form': function(event,template) {
            event.preventDefault();

			let id = Meteor.userId();
            let title = template.find('#title').value;
            let content = template.find('#content').value;
            let keywords = template.find('#keywords').value;
            
            Meteor.call('editNotes', id, title, content, keywords);
        }
    });
