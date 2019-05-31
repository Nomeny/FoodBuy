Template.repas.helpers({
    //Fonction qui trie les repas selon la valeur choisie par l'utilisateur
    'sortRepas': function () {
        switch (classement) {
            case "name":
                return Meteor.repas.find().sort({ nom: 1 });
            case "priceUp":
                return Meteor.repas.find().sort({ prix: 1 });
            case "priceDown":
                return Meteor.repas.find().sort({ prix: -1 });
            default:
                return Meteor.repas.find();
        }
    },
});

Template.repas.events({
    "click #classement": function (event) {
		let classement = event.target.order.value;
	},
});