Template.user.helpers({
    //Récupère les informations utilisateurs
    'getUser': function () {
        return Meteor.users.find();
    },
    //Permet d'obtenir l'email de l'utilisateur connecté
    'userEmail': function () {
        console.log(emails[0].address);
        return emails[0].address;
    },
    'displayProfile': function () {
        return Session.get('displayProfile');
    },


});