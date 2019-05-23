Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){
	// accueil
	this.route('accueil',{
		path: '/',
		template: 'accueil',
		data: function(){
			templateData = {
				repas: Repas.find()
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

	//voir les detailles d'un repas

	Router.route('/details/:_id', function () {
		this.render('navbar', {
			to: "navbar"
		});
		this.render('details', {
			to: 'main',
			data: function () {
				return Repas.findOne({ _id: this.params._id });
			}
		})
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
	this.route('profil', {
		path:'/profil',
		template: 'profil'

		})

});	
