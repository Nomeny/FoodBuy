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

//UserImages = new Mongo.Collection("UserImages");



