Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){
	// Posts accueil
	this.route('accueil',{
		path: '/',
		template: 'accueil'
	});

	// Profil Route
	this.route('profil');
});