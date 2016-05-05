Template.newNote.events = {
    'click #submit': function(event, template) {
        event.preventDefault();
        let title = template.find('#title').value;
        let content = template.find('#content').value;
        let keywords = template.find('#keywords').value;
        let userID = Meteor.userId();
        let email = Meteor.user().emails[0].address;

        console.log(title);
        console.log(content);
        console.log(keywords);
        console.log(userID);
        console.log(email);

        Notes.insert({
            title : title,
            content : content,
            keywords : keywords,
            userID : userID,
            email : email
        });
        
        Router.go('myBoard');

    }
};