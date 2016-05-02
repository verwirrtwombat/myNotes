Router.configure({layoutTemplate : 'layout'});

Router.route('/home', function() {
	this.layout('home');
	this.render('navBar', {to : 'navBar'});
});

Router.route('/login', function() {
	this.layout('login');
	this.render('navBar', {to : 'navBar'});
});

Router.route('/register', function() {
	this.layout('register');
	this.render('navBar', {to : 'navBar'});
});

Router.route('/myBoard', function() {
	this.layout('myBoard');
	this.render('navBar', {to : 'navBar'});
});

Router.route('/newNote', function() {
	this.layout('newNote');
	this.render('navBar', {to : 'navBar'});
});