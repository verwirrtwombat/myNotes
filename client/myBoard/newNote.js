Template.newNote.events = {
        'click #submit': function(event, template) {
            event.preventDefault();
            let title = template.find('#title').value;
            let content = template.find('#content').value;
            let keywords = template.find('#keywords').value;
            let email = Meteor.user().email;

            console.log(title);
            console.log(content);
            console.log(keywords);
            console.log(email);

            Notes.insert({
                title : title,
                content : content,
                keywords : keywords,
                email : email
            });
        }
    };