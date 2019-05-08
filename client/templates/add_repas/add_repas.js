//Pour récupérer le formulaire
Template.add_repas.events({
	"submit .add_repas": function(event){
		var name = event.target.name.value;
		var category = event.target.category.value;
		var description = event.target.description.value;
		var is_featured = event.target.is_featured.value;

		var file = $('#repasImage').get(0).files[0];

		if(file){
			fsFile = new FS.File(file);

			RepasImages.insert(fsFile, function(err, result){
				if(!err){
					var repasImage = '/cfs/files/RepasImages/'+result._id;
					console.log(repasImage)

					Repas.insert({
						name: name,
						category: category,
						description: description,
						is_featured: is_featured,
						image: repasImage,
						createdAt: new Date()
					});
				}
			});
		} else {
			var repasImage = '/img/noimage.png';

			Repas.insert({
				name: name,
				category: category,
				description: description,
				is_featured: is_featured,
				image: repasImage,
				createdAt: new Date()
			});
		}

		// Clear form
	    event.target.name.value = "";
	    event.target.category.value = "";
	    event.target.description.value = "";
	    event.target.is_featured.value = "";

	    FlashMessages.sendSuccess("Repas ajouté");
	    Router.go('/');

		return false;
	}
});