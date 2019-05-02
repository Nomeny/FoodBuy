Template.acceuil.helpers({
	foods: function(){
		return Foods.find({}, {sort:{createdAt: -1}});
	}
});