# Evaluation JS avancé

## Objectifs

Mettre en application les notions abordées cette semaine (ajax et api principalement).

Compétences qui seront évaluées :
* Interactions avec la page web (création d'éléments html, mise en place d'événements)
* Envoi de requête HTTP (utilisation de fetch et des api)

## Rendu

Fournir un lien soit vers un dépôt github soit vers votre ide en ligne. Pensez à remplir le doc ci-dessous avec le lien.

[Doc](https://docs.google.com/spreadsheets/d/1FG3mYVUH5kBjLPXZZQVMIb7DD8_pxTwnOaADXVqViBk/edit#gid=0)

## Projets

Pour chaque projet, découper au maximum le code en plusieurs fonctions/classes et en plusieurs fichiers. Si c'est possible, essayer d'utiliser la syntaxe *async/await*.

### Liste des films

Le but de ce projet est de manipuler l'api [themoviedb](https://developer.themoviedb.org/reference/intro/getting-started).

#### Pré-requis

Créer une clé API sur le site [https://www.themoviedb.org/](https://www.themoviedb.org/). Pour cela il faut se créer un compte puis faire une demande de clé (normalement c'est instantanné).

#### Instructions

1. Mettre en place une page web avec un formulaire de recherche avec un champ texte pour la recherche et un bouton pour valider le formulaire
2. Lorsque le formulaire de recherche est soumis, envoyer une requête ajax vers l'api pour récupérer la liste des films correspondants à cette recherche
3. Créer les différents éléments sur la page avec les informations des films (titre, description si possible en français, image du film)
4. Afficher une pagination (liens vers les différentes pages) après chaque recherche
5. Lorsque l'on clique sur le numéro d'une page, on fait une autre requête vers le même film mais avec un numéro de page différent

### Liste des cinémas

Le but de ce projet est de manipuler l'api [https://data.culture.gouv.fr/explore/dataset/etablissements-cinematographiques/api/](https://data.culture.gouv.fr/explore/dataset/etablissements-cinematographiques/api/)

#### Instructions

1. Mettre en place une page web avec un formulaire contenant un champ texte pour l'adresse et un bouton de validation ainsi qu'un bouton pour "Me géolocaliser" à côté du champ texte
2. Lorsque l'on clique sur le bouton "Me géolocaliser" on récupère les coordonnées GPS de l'utilisateur et il faudra aller chercher l'adresse correspondante à ces coordonnées dans l'api [https://adresse.data.gouv.fr/api-doc/adresse](https://adresse.data.gouv.fr/api-doc/adresse)
3. Lorsque l'adresse a été récupérée, remplir le champ texte avec cette adresse
4. Lorsque le formulaire de recherche a été soumis, récupérer les coordonnées GPS correspondantes à l'adresse, grâce à cette [api]([https://adresse.data.gouv.fr/api-doc/adresse](https://adresse.data.gouv.fr/api-doc/adresse)
5. Une fois les coordonnées récupérées, envoyer une requête vers l'api pour récupérer la liste des cinémas proches de cette zone (dans un rayon de 10km)
6. Afficher la liste des cinémas sur la page (nom du cinéma, adresse, ville)
7. [BONUS] Trier la liste des cinémas en fonction de la distance par rapport à votre position (la distance apparaîtra également sur la liste)
8. [BONUS++] Afficher une carte interactive à côté de la liste des cinémas (moitié écran carte/moitié écran liste des cinémas) avec tous les cinémas situés à l'intérieur des limites de la carte

