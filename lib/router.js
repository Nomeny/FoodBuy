Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){
	// Profil accueil
	this.route('accueil',{
		path: '/',
		template: 'accueil'
	});

	// Profil Route
	this.route('profil');
});