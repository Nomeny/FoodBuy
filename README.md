# FoodBuy
---
## _FoodBuy - version 1.0_

_Par Andres , Gislain Delavy, Sinem , Nomeny Ramamonjisoa, Paul Zignani_

Projet réalisé dans le cadre du cours Programmation pour Internet II - Meteor.js donné par Isaac Pante et Loris Rimaz

Faculté des Lettres - Université de Lausanne - Février à Mai 2019 Github

## Description
---
L'objectif du projet FoodBuy est de créer une plateforme de partage de nourriture. Les utilisateurs du site peuvent proposer 
de la nourriture, en indiquant les détails de leurs plats et un prix, s'ils le désirent. Ou, ils peuvent acheter la nourriture des
autres utilisateurs. Les deux parties peuvent alors intéragir par le biais d'un chat dédié à chaque repas. FoodBuy aspire à réduire
le gaspillage alimentaire.

Le site est destiné à un publique très large. Il vise premièrement toutes les personnes cherchant à combattre le gaspillage alimentaire. 
Mais il est aussi dirigé vers celles et ceux qui n'ont pas le temps ou l'envie de cuisiner, ainsi que ceux, qui à l'inverse, désirent cuiser 
pour les autres.

## Interface
---
Cette section défini les différentes étapes d'utilisation
- L'utilisateur arrive sur la page d'accueil, il peut y voir les repas posté par la communauté
![image](https://raw.githubusercontent.com/Nomeny/FoodBuy/master/Immages-ReadMe/FoodBuy-Accueil.PNG)
- S'il veut intéragir avec le site, il doit se connecter ou s'enregistrer.
![image](https://raw.githubusercontent.com/Nomeny/FoodBuy/master/Immages-ReadMe/FoodBuy-SingIn.PNG)
- L'utilisateur peut accéder à un formulaire, grâce à la barre de navigation, afin de proposer un repas
![image](https://raw.githubusercontent.com/Nomeny/FoodBuy/master/Immages-ReadMe/FoodBuy-PostRepas.PNG)
- Enfin, s'il veut commander un repas ou obtenir plus d'informations, il peut chatter avec les autres utilisateurs. Cela ce fait sur une page
détaillant le repas.
![image](https://github.com/Nomeny/FoodBuy/blob/master/Immages-ReadMe/FoodBuy-D%C3%A9tails.PNG)

##Base de données
---
Le site dépend de trois bases de données principale, la première est celle qui gère les comptes des utilisateurs elle est issue du Package _accounts-base_. La seconde, _Repas_, sauvegarde les repas. C'est dans celle-ci que sont stockés les détails concernant les repas. L'utilisateur y ajoute une entrée, à chaque fois qu'il poste un nouveau repas. La dernière, _Commentaire_, enregistre les commentaires des utilisateurs. Elle contient le contenu des message, ainsi qu'un attribut lié à l'url permettant d'envoyer les message sur les pages adéquates.

Les deux dernières _collections_ dépendent de la base de données issue de _accounts-base_, car elles sont les deux liés a un utilisateur.

##Licences
---
_FoodBuy_ est un logiciel gratuit

Il  été développé avec le framework de développement web en Javascript Meteor dans sa version 1.8.1.

(Une version antérieure du projet existe [dans ce répertoire](https://github.com/astad5679/FoodBay); elle à été abandonné car toute l'architecture était à refaire.)
