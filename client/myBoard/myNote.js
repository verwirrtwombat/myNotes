Template.myNote.events = {
    // 'click #update': function(event, template) {
    //     event.preventDefault();
        
    //     let title = template.find('#title').value;
    //     let content = template.find('#content').value;
    //     let keywords = template.find('#keywords').value;

    //     Notes.update(this._id) { //update doesnt work
    //         title : title,
    //         content : content,
    //         keywords : keywords
    //     }

    //     Router.go('myBoard');
    // },

    'click #delete': function(event, template) {
        event.preventDefault();
        Notes.remove(this._id);
        Router.go('myBoard');
    },

    'click #share': function(event, template) {
        event.preventDefault();

        let title = template.find('#title').value;
        let content = template.find('#content').value;
        let keywords = template.find('#keywords').value;
        let userID = Meteor.userId();
        let email = template.find('#share').value;

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