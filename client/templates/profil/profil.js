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
		Router.go('/');
		return false;
	}
	
});

Template.profil.helpers({
    'getUser' : function(){
		return Meteor.users.find();
		},
		'userEmail' : function() {
			return this.emails[0].address;
		},
});