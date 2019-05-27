
//affiche l'utilisateur et l'heure de l'envoie du message
Template.message.helpers({
    username: function() {
        return Meteor.users.findOne({_id: this.user});
    },

    tempsMS: function() {
        return moment(this.tempsenvoie).format('LT'); //affiche uniquement les heures et les minutes
    }
});