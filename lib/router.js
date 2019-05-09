Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){
	// accueil
	this.route('acceuil',{
		path: '/',
		template: 'acceuil',
		data: function(){
			templateData = {
				repas: Repas.find({is_featured: "1"})
			};

			return templateData;
		}
	});

	// Repas
	this.route('repas', {
		path:'/repas',
		template: 'repas',
		data: function(){
			templateData = {
				repas: Repas.find()
			};

			return templateData;
		}
	});

	// Add repas
	this.route('add_repas', {
		path:'/add_repas',
		template: 'add_repas',
		data: function(){
			templateData = {
				categories: Categories.find()
			};

			return templateData;
		}
	});
	// Profile Route
	this.route('profile', {
		path:'/profile',
		template: 'profile'

		});
});