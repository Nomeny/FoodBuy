Meteor.publish('repasCol', function(){
	return Repas.find();
});

Meteor.publish('categoriesCol', function(){
	return Categories.find();
});

Meteor.publish('commentairesCol',  function(){
	return Commentaires.find();
});

Meteor.startup(function() {
	//ajoute trois repas exemple, s'il n'y a aucun repas proposé
	if (Repas.find().count() === 0) {
		Repas.insert({
			nom: 'Lasagne',
			portions: '2',
			prix: '10',
			ingredients: 'divers',
			lieu: 'Lausanne',
			type: 'salé',
			description: "Ce plat est un exemple, aucun plat n'est proposé pour l'instant. Revenez un peu plus tard!",
			adresse: 'Chemin des exemple 13',
			estVeg: 'non végétarien',
			image: '/img/Exemple-Lasagne.png',
			createdAt: moment(new Date()).format('LLL'),
			//date: moment(createdAt).format('LLL')
			vendeur: 'Exemple'
		  });
		  Repas.insert({
			nom: 'Salade de fruits',
			portions: '3',
			prix: '9',
			ingredients: 'fruits',
			lieu: 'Lausanne',
			type: 'sucré',
			description: "Ce plat est un exemple, aucun plat n'est proposé pour l'instant. Revenez un peu plus tard!",
			adresse: 'Chemin des exemple 13',
			estVeg: 'vegan',
			image: '/img/Exempl-SaladeFruits.png',
			createdAt: moment(new Date()).format('LLL'),
			//date: moment(createdAt).format('LLL')
			vendeur: 'Exemple'
		  });
		  Repas.insert({
			nom: 'Ramen aux Légumes',
			portions: '1',
			prix: '7',
			ingredients: 'divers',
			lieu: 'Lausanne',
			type: 'salé',
			description: "Ce plat est un exemple, aucun plat n'est proposé pour l'instant. Revenez un peu plus tard!",
			adresse: 'Chemin des exemple 13',
			estVeg: 'végétarien',
			image: '/img/Exemple-Ramen.png',
			createdAt: moment(new Date()).format('LLL'),
			//date: moment(createdAt).format('LLL')
			vendeur: 'Exemple'
		  });
	}
});