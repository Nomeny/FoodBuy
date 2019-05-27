Template.commentaires.helpers({
    commentaires: function() {
        return Commentaires.find(
            {'roomId': window.location.pathname}); //affiche uniquement les commentaires qui ont le même url comme Id
    }
});

//envoyer un commentraire en appuyant sur la touche "Enter"
Template.commentaires.events({
    'keypress textarea': function(e, instance) {
        if (e.keyCode == 13){ //la touche enter
            let text = instance.find('textarea').value; //enregistre la valeur de la textarea
            instance.find('textarea').value = ''; //remet la valeur à "0"
                  
            let currentRoomId = window.location.pathname; //l'Id de la "chambre" correspond à l'url de chaque plats (les pages détails)
            
            Commentaires.insert({
                message: text,
                tempsenvoie: new Date(),
                username: Meteor.user().username,
                roomId: currentRoomId
            });
        }
    }
})
