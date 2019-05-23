Template.commentaires.helpers({
    commentaires: function() {
        return Commentaires.find();
    }
});

//envoyer un commentraire en appuyant sur la touche "Enter"
Template.commentaires.events({
    'keypress textarea': function(e, instance) {
        if (e.keyCode == 13){
            let text = instance.find('textarea').value;
            instance.find('textarea').value = '';

            Commentaires.insert({
                message: text,
                tempsenvoie: new Date(),
                username: Meteor.user().username
            });
        }
    }
})
