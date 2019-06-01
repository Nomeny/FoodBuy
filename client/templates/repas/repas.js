Template.repas.helpers({
    //Fonction qui trie les repas selon la valeur choisie par l'utilisateur
    sortRepas: function () {
        console.log("sort");
        let classement = Session.get('sort');
        switch (classement) {
            case "name":
                return Meteor.repas.find().fetch().sort({ nom: 1 });
            case "priceUp":
                return Meteor.repas.find().fetch().sort({ prix: 1 });
            case "priceDown":
                return Meteor.repas.find().fetch().sort({ prix: -1 });
            case "portions":
                return Meteor.repas.find().fetch().sort({ portions: 1 });
            default:
                return Meteor.repas.find();
        }
    },
});

Template.repas.events({
    "change select": function (event) {
        let classement = event.target.value;
        console.log(classement);
        Session.set('sort', classement);
    },
});