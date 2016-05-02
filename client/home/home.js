Template.register.events({
    'submit .register-form': function (event, template) {

        event.preventDefault();

        let email = template.find('#email').value;
        let password = template.find('#password').value;
        
        console.log(email)

        Accounts.createUser({
            email : email,
            password: password
        });

        Meteor.loginWithPassword (email, password, function(err) {
            if(!err) {
                console.log(error.reason);
            } else {
                Router.go('userBoard');
            }
        });
    }
});

Template.login.events({
    'submit .login-form': function (event, template) {
        
        event.preventDefault();

        let email = template.find('#email').value;
        let password = template.find('#password').value;
        console.log(email);
        Meteor.loginWithPassword(email, password, function(err){
            if(!err) {
                console.log(error.reason);
            }  else {
                Router.go('userBoard');
            }
        });
    }
});

