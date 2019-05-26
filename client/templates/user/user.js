Template.user.helpers({
    //Récupère les informations utilisateurs
'getUser' : function(){
    return Meteor.users.find();
    },
    //Permet d'obtenir l'email de l'utilisateur connecté
    'userEmail' : function() {
        return this.emails[0].address;
    },
'displayProfile' : function(){
    return Session.get('displayProfile');
},


});