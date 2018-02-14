'use strict';

angular.module('forms').config(['$translateProvider', function ($translateProvider) {

  	$translateProvider.translations('fr', {
    	// Configurer la vue de l'onglet Formulaire
		ADVANCED_SETTINGS: 'Paramètres avancés',
		FORM_NAME: "Nom du formulaire",
		FORM_STATUS: 'Statut du formulaire',
		PUBLIC: 'Public',
		PRIVATE: "Privé",
		GA_TRACKING_CODE: "Code de suivi Google Analytics",
		DISPLAY_FOOTER: "Afficher le pied de formulaire ?",
		SAVE_CHANGES: 'Enregistrer les modifications',
		CANCEL: 'Annuler',
		DISPLAY_START_PAGE: "Afficher la page de démarrage ?",
		DISPLAY_END_PAGE: "Afficher la page de fin personnalisée ?",

		// Afficher les formulaires
		CREATE_A_NEW_FORM: "Créer un nouveau formulaire",
		CREATE_FORM: "Créer un formulaire",
		CREATED_ON: 'Créé le',
		MY_FORMS: 'Mes formulaires',
		NAME: "Nom",
		LANGUE: 'Langue',
		FORM_PAUSED: 'Formulaire en pause',

		// Modifier le modal de champ
		EDIT_FIELD: "Modifier ce champ",
		SAVE_FIELD: 'Enregistrer',
		ON: 'ON',
		OFF: "OFF",
		REQUIRED_FIELD: "Obligatoire",
		LOGIC_JUMP: 'Saut logique',
		SHOW_BUTTONS: 'Boutons supplémentaires',
		SAVE_START_PAGE: "Enregistrer",

		// Affichage du formulaire d'administration
		ARE_YOU_SURE: 'Es-tu ABSOLUMENT sûr?',
		READ_WARNING: "De mauvaises choses inattendues se produiront si vous ne lisez pas ceci!",
		DELETE_WARNING1: 'Cette action NE PEUT PAS être annulée. Cela supprimera définitivement le "',
		DELETE_WARNING2: '" forme et supprime toutes les soumissions de formulaire associées. ',
		DELETE_CONFIRM: "Veuillez taper le nom du formulaire pour confirmer.",
		I_UNDERSTAND: 'Je comprends les conséquences, efface ce formulaire.',
		DELETE_FORM_SM: 'Supprimer',
		DELETE_FORM_MD: "Supprimer le formulaire",
		DELETE: "Supprimer",
		FORM: 'Formulaire',
		VIEW: "Afficher",
		LIVE: "Live",
		PREVIEW: 'Aperçu',
		COPY: "Copier",
		COPY_AND_PASTE: "Copiez et collez ceci pour ajouter votre TellForm à votre site Web",
		CHANGE_WIDTH_AND_HEIGHT: "Changez les valeurs de largeur et de hauteur pour mieux vous convenir",
		POWERED_BY: "Alimenté par",
		TELLFORM_URL: "Votre TellForm est disponible à cette URL",

		// Modifier la vue de formulaire
		DISABLED: "Désactivé",
		OUI: 'OUI',
		NO: 'NON',
		ADD_LOGIC_JUMP: 'Ajouter un saut de logique',
		ADD_FIELD_LG: "Cliquez pour ajouter un nouveau champ",
		ADD_FIELD_MD: "Ajouter un nouveau champ",
		ADD_FIELD_SM: "Ajouter un champ",
		EDIT_START_PAGE: "Modifier la page de démarrage",
		EDIT_END_PAGE: "Modifier la page de fin",
		WELCOME_SCREEN: 'Page de démarrage',
		END_SCREEN: 'Fin de page',
		INTRO_TITLE: "Titre",
		INTRO_PARAGRAPH: 'Paragraphe',
		INTRO_BTN: 'Bouton de démarrage',
		TITLE: "Titre",
		PARAGRAPHE: 'Paragraphe',
		BTN_TEXT: "Bouton Retour",
		BOUTONS: 'Boutons',
		BUTTON_TEXT: "Texte",
		BUTTON_LINK: "Lien",
		ADD_BUTTON: 'Ajouter un bouton',
		PREVIEW_FIELD: 'Question d\'aperçu',
		QUESTION_TITLE: "Titre",
		QUESTION_DESCRIPTION: 'Description',
		OPTIONS: 'Options',
		ADD_OPTION: 'Ajouter une option',
		NUM_OF_STEPS: "Nombre d'étapes",
		CLICK_FIELDS_FOOTER: 'Cliquez sur les champs pour les ajouter ici',
		SHAPE: 'Forme',
		IF_THIS_FIELD: "Si ce champ",
		IS_EQUAL_TO: 'est égal à',
		IS_NOT_EQUAL_TO: 'n\'est pas égal à',
		IS_GREATER_THAN: 'est supérieur à',
		IS_GREATER_OR_EQUAL_THAN: 'est supérieur ou égal à',
		IS_SMALLER_THAN: 'est plus petit que',
		IS_SMALLER_OR_EQUAL_THAN: 'est plus petit ou égal à',
		CONTAINS: 'contient',
		DOES_NOT_CONTAINS: 'ne contient pas',
		ENDS_WITH: "se termine par",
		DOES_NOT_END_WITH: "ne finit pas avec",
		STARTS_WITH: 'commence par',
		DOES_NOT_START_WITH: "ne commence pas par",
		THEN_JUMP_TO: 'alors saute à',

		// Modifier la vue des soumissions
		TOTAL_VIEWS: 'total des visites uniques',
		RESPONSES: "réponses",
		COMPLETION_RATE: "taux d'achèvement",
		AVERAGE_TIME_TO_COMPLETE: 'moy. le temps d\'achèvement',

		DESKTOP_AND_LAPTOP: 'Desktops',
		TABLETS: 'Tablettes',
		PHONES: 'Téléphones',
		OTHER: 'Autre',
		UNIQUE_VISITS: 'Visites uniques',

		FIELD_TITLE: 'Titre du champ',
		FIELD_VIEWS: 'Vues de champ',
		FIELD_DROPOFF: "Achèvement du champ",
		FIELD_RESPONSES: 'Réponses sur le terrain',
		DELETE_SELECTED: 'Supprimer la sélection',
		EXPORT_TO_EXCEL: 'Exporter vers Excel',
		EXPORT_TO_CSV: 'Export vers CSV',
		EXPORT_TO_JSON: "Exporter vers JSON",
		PERCENTAGE_COMPLETE: 'Pourcentage terminé',
		TIME_ELAPSED: 'Temps écoulé',
		DEVICE: "Dispositif",
		LOCATION: "Emplacement",
		IP_ADDRESS: 'Adresse IP',
		DATE_SUBMITTED: 'Date de soumission',

		// Vue de conception
		BACKGROUND_COLOR: "Couleur d'arrière-plan",
		DESIGN_HEADER: "Changer l'apparence de votre formulaire",
		QUESTION_TEXT_COLOR: "Couleur du texte de la question",
		ANSWER_TEXT_COLOR: "Couleur du texte de la réponse",
		BTN_BACKGROUND_COLOR: "Couleur d'arrière-plan du bouton",
		BTN_TEXT_COLOR: "Couleur du texte du bouton",

		// Vue de partage
		EMBED_YOUR_FORM: "Intégrez votre formulaire",
		SHARE_YOUR_FORM: "Partager votre formulaire",

		// Onglets d'administration
		CREATE_TAB: "Créer",
		DESIGN_TAB: 'Design',
		CONFIGURE_TAB: 'Configurer',
		ANALYZE_TAB: "Analyser",
		SHARE_TAB: "Partager",

		// Types de champs
		SHORT_TEXT: "Texte court",
		EMAIL: "E-mail",
		MULTIPLE_CHOICE: 'Choix multiple',
		DROPDOWN: 'Menu Déroulant',
		DATE: 'Date',
		PARAGRAPH_T: "Paragraphe",
		OUI_NON: 'Oui / Non',
		LEGAL: 'Légal',
		RATING: "Évaluation",
		NUMBERS: "Chiffres",
		SIGNATURE: 'Signature',
		FILE_UPLOAD: 'Téléchargement de fichier',
		OPTION_SCALE: 'Option Scale',
		PAYMENT: 'Paiement',
		STATEMENT: 'Déclaration',
		LINK: "Lien",

		// Aperçu du formulaire
		FORM_SUCCESS: 'Entrée de formulaire soumise avec succès!',
		REVIEW: 'Réviser',
		BACK_TO_FORM: "Revenir au formulaire",
		EDIT_FORM: "Modifier ce TellForm",
		ADVANCEMENT: '{{done}} sur {{total}} a répondu',
		CONTINUE_FORM: "Continuer à se former",
		REQUIRED: 'requis',
		COMPLETING_NEEDED: '{{answers_not_completed}} réponse (s) doivent être complétées',
		OPTIONAL: 'optionnel',
		ERROR_EMAIL_INVALID: "Veuillez entrer une adresse email valide",
		ERROR_NOT_A_NUMBER: "Veuillez entrer uniquement des numéros valides",
		ERROR_URL_INVALID: "S'il vous plaît une adresse valide",
		OK: 'OK',
		ENTER: 'appuyez sur ENTRER',
		NEWLINE: 'appuyez sur MAJ + ENTRÉE pour créer une nouvelle ligne',
		CONTINUE: "Continuer",
		LEGAL_ACCEPT: 'J\'accepte',
		LEGAL_NO_ACCEPT: "Je n'accepte pas",
		SUBMIT: "Soumettre",
		UPLOAD_FILE: "Télécharger votre fichier"
  	});
}]);
