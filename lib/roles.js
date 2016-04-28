UserNotes = new Mongo.Collection('userNotes');

if (Meteor.isClient) {
    Template.login.events({
        'submit form': function(event) {
            event.preventDefault();
            var email = $('[name=loginEmail]').val();
            var password = $('[name=loginPassword]').val();
            Meteor.loginWithPassword(email, password, function(error) {
                if (error) {
                    console.log(error.reason);
                } else {
                    Router.go("/home");
                }
            });
        }
    });
}
    
if (Meteor.isServer) {
    Meteor.startup(function() {
        Meteor.methods({
            'create': function(email, password) {
                console.log(email);
                console.log(password);
                var id;
                id = Accounts.createUser({
                    email: email,
                    password: password
                });
            },

            'editNotes': function (id, title, content, keywords){

                Apprentices.update(
                    {'userID': id},
                    {'notes': {
                        'title': title,
                        'content': content,
                        'keywords': keywords
                        }
                    }
                 //   {upsert : true}
                );
            }

            // 'addCompanyFavor': function (apprenticeID){

            //     let id = Meteor.userId();
            //     console.log(id);
            //     console.log(apprenticeID);
            //     let company = Companies.findOne({"userID":id});
            //     console.log("here is company: " + company.name);

            //     Companies.update(
            //         {'userID' : id},
            //         {$push : {'favorite' : apprenticeID} }
            //         );

            //     Apprentices.update(
            //         {'userID' : apprenticeID},
            //         {$push : {'beLiked' : id} }
            //     );

            // },

            // 'deleteCompanyFavor': function (apprenticeID){

            //     let id = Meteor.userId();
            //     console.log(id);
            //     console.log(apprenticeID);
            //     let company = Companies.findOne({"userID":id});
            //     console.log("here is company: " + company.name);

            //     Companies.update(
            //         {'userID' : id},
            //         {$pull : {'favorite' : apprenticeID} }
            //         );

            //     Apprentices.update(
            //         {'userID' : apprenticeID},
            //         {$pull : {'beLiked' : id} }
            //     );

            // }
        });
    });
}