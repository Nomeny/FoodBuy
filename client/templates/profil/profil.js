Template.profil.events({
	"submit .edit-profile": function(event){
		var file = $('#profileImage').get(0).files[0];
		
		if(file){
			fsFile = new FS.File(file);

			ProfileImages.insert(fsFile, function(err, result){
				if(err){
					throw new Meteor.Error(err);
				} else {

					var imageLoc = '/cfs/files/ProfileImages/'+result._id;

					UserImages.insert({
						userId: Meteor.userId(),
						username: Meteor.user().username,
						image: imageLoc
					});

					Router.go('/');
				}
			});
		}
		return false;
	},
	"click .editbutton": function(event){
		Session.set('displayProfile', false)
	},
	"click .submitbutton": function(event){
		Session.set('displayProfile', true)
	}
	
});

Template.profil.helpers({
		//Récupère les informations utilisateurs
    'getUser' : function(){
		return Meteor.users.find();
		},
		//Permet d'obtenir l'email de l'utilisateur connecté
		'userEmail' : function() {
			return this.emails[0].address;
		},
	'displayProfile' : function(){
		return Session.get('displayProfile');
	},

	
});

Session.set('displayProfile', true);