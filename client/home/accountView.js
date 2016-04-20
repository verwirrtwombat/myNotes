    Template.navBar.events({
        'click .logout':function() { 
            Meteor.logout();       
            Router.go('home');
        }
    });

Template.userPage.events({
        'click .logout':function() { 
            Meteor.logout();       
            Router.go('home');
        }
    });    

    Template.register.events( {
        'submit .register-form': function (event) {

            event.preventDefault();

            var email = event.target.email.value;
            var password = event.target.password.value;
            var firstname = event.target.firstname.value;
            var lastname = event.target.lastname.value;

            var user = {'email':email,password:password,profile:{name:firstname +" "+lastname}};

            Accounts.createUser(user,function(err) {
                if(!err) {
                    console.log(error.reason);
                } else {
                    Router.go('login');
                }
            });
        }
    });

    Template.login.events({
        'submit .login-form': function (event) {
            event.preventDefault();


            var email = event.target.email.value;
            var password = event.target.password.value;

            Meteor.loginWithPassword(email,password,function(err){
                if(!err) {
                    console.log(error.reason);
                }  else {
                    Router.go('userPage');
                }
            });
        }
    });

