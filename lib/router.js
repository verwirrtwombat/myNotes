Router.configure({layoutTemplate : 'layout' });

Router.route('/home', function() {
	this.layout('home');
	this.render('navBar', {to : 'navbar'});
});

Router.route('/login', function() {
	this.layout('login');
	this.render('navBar', {to : 'navbar'});
});

Router.route('/register', function() {
	this.layout('register');
	this.render('navBar', {to : 'navbar'});
});

Router.route('/userPage', function() {
	this.layout('userPage');
	this.render('navBar', {to : 'navbar'});
});

Router.route('/userBoard1', function() {
	this.layout('userBoard1');
	this.render('navBar', {to : 'navbar'});
});

Router.route('/userBoard2', function() {
	this.layout('userBoard2');
	this.render('navBar', {to : 'navbar'});
});