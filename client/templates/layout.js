// mise en forme Texte description
Template.registerHelper('formeTexte', function(text, length){
	var newText = text.substring(0, length);
	newText = newText.substr(0, Math.min(newText.length, newText.lastIndexOf(" "))) //ne pas couper le mot
	return new Spacebars.SafeString(newText)
});
