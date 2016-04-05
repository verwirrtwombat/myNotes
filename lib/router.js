Router.configure({layoutTemplate : 'layout' });

Router.route('/home', function() {
	this.layout('homePage');
	this.render('navBar', {to :'navbar'});
});

Router.route('/login', function() {
	this.layout('login');
	this.render('navBar', {to : 'navbar'});
});

Router.route('/register', function() {
	this.layout('register');
	this.render('navBar', {to : 'navbar'});
});

Router.route('/user', function() {
	this.layout('userPage');
	this.render('navBar', {to : 'navbar'});
});