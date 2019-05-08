Template.accueil.helpers({
	//Récupère les informations de la collection Foods
	foods: function(){
		return Foods.find({}, {sort:{createdAt: -1}});
	}
});