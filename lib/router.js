Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){
	// Posts acceuil
	this.route('acceuil',{
		path: '/',
		template: 'acceuil'
	});

	
	// Profile Route
	this.route('profile');
});