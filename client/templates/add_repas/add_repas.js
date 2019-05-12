//Pour récupérer le formulaire
Template.add_repas.events({
	"submit .add_repas": function(event){
		event.preventDefault();
		var nom = event.target.nom.value;
        var portions = event.target.portions.value;
        var prix = event.target.prix.value;
        var ingredients = event.target.ingredients.value;
        var lieu = event.target.lieu.value;
        var type = event.target.type.value;
        var description = event.target.description.value;
        var adresse = event.target.adresse.value;
        var estVeg = event.target.estVeg.value;

		var file = $('#repasImage').get(0).files[0];

		if(file){
			fsFile = new FS.File(file);

			RepasImages.insert(fsFile, function(err, result){
				if(!err){
					var repasImage = '/cfs/files/RepasImages/'+result._id;
					console.log(repasImage)

					Repas.insert({
						nom: nom,
    		            portions: portions,
    		            prix: prix,
    		            ingredients: ingredients,
    		            lieu: lieu,
    		            type: type,
    		            description: description,
    		            adresse: adresse,
    		            estVeg: estVeg,
						image: repasImage,
						createdAt: new Date()
					});
				}
			});
		} else {
			var repasImage = '/img/noimage.png';

			Repas.insert({
				nom: nom,
				portions: portions,
				prix: prix,
				ingredients: ingredients,
				lieu: lieu,
				type: type,
				description: description,
				adresse: adresse,
				estVeg: estVeg,
				image: repasImage,
				createdAt: new Date()
			});
		}

		// Clear form
	    event.target.nom.value = "";
	    event.target.portions.value = "";
	    event.target.description.value = "";
	    event.target.ingredients.value = "";

	    FlashMessages.sendSuccess("Repas ajouté");
	    Router.go('/');

		return false;
	}
});