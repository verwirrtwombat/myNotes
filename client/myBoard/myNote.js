Template.myNote.events = {
    'click #update': function(event, template) {
        event.preventDefault();
        
        let title = template.find('#title').value;
        let content = template.find('#content').value;
        let keywords = template.find('#keywords').value;

        console.log(documentId);
        console.log(title);
        console.log(content);
        console.log(keywords);
        console.log(documentID);

        Notes.update({_id : this._id}, {$set: {
            title : title,
            content : content,
            keywords : keywords
        }
    });
        
        Router.go('myBoard');

    }
};

Template.myNote.events = {
    'click #delete': function(event, template) {
        Notes.remove(this._id);
        Router.go('myBoard');
    }
};


Template.myNote.events = {
    'click #share': function(event, template) {
        event.preventDefault();

        let title = template.find('#title').value;
        let content = template.find('#content').value;
        let keywords = template.find('#keywords').value;
        let userID = Meteor.userId();
        let email = template.find('#share').value;

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