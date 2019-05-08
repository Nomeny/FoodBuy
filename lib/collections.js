// Categories
Categories = new Mongo.Collection("categories");
// Produits repas
Repas = new Mongo.Collection("repas");

// Repas Image Collection
RepasImages = new FS.Collection("RepasImages", {
	stores: [new FS.Store.GridFS("RepasImages")]
});

// Profile Images Collection
ProfileImages = new FS.Collection("ProfileImages", {
	stores: [new FS.Store.GridFS("ProfileImages")]
});

ProfileImages.allow({
  insert:function(userId,doc){
    return true;
  },
  update:function(userId,doc,fields,modifier){
   return true;
  },
  download:function(){
    return true;
  }
});

<<<<<<< Updated upstream
UserImages = new Mongo.Collection("UserImages");
UserList = new Mongo.Collection("utilisateurs");
Foods = new Mongo.Collection("foods");

//Schéma de la collection Foods
Foods.attachSchema(new SimpleSchema({
	body: {
		type: String,
		max: 500
	},
	userId: {
		type: String,
		autoValue: function(){return Meteor.userId()}
	},
	username:{
		type: String,
		autoValue: function(){return Meteor.users.findOne({_id: this.userId}).username}
	},
	createdAt: {
		type: Date,
		autoValue: function(){return new Date()}
	}
}));

//Quelle est la fonction de ce code ?
Foods.allow({
  insert:function(userId,doc){
    return true;
  }
});


=======
//UserImages = new Mongo.Collection("UserImages");



>>>>>>> Stashed changes
