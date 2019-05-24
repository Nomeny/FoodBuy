Template.commentaires.helpers({
    commentaires: function() {
        return Commentaires.find({},{$elemMatch: {roomId: this.currentRoomId}});
    }
});

//envoyer un commentraire en appuyant sur la touche "Enter"
Template.commentaires.events({
    'keypress textarea': function(e, instance) {
        if (e.keyCode == 13){
            let text = instance.find('textarea').value;
            instance.find('textarea').value = '';
            
            let currentRoomId = Repas.findOne({_id: this._id});
            
            Commentaires.insert({
                message: text,
                tempsenvoie: new Date(),
                username: Meteor.user().username,
                roomId: currentRoomId
            });
        }
    }
})
