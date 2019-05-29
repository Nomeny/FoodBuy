Meteor.publish('repasCol', function(){
	return Repas.find();
});

Meteor.publish('categoriesCol', function(){
	return Categories.find();
});

Meteor.publish('commentairesCol',  function(){
	return Commentaires.find();
});

