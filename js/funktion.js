$(document).ready(function(){
	$("#bild").hide();

	var isHidden = true;

	$("#awp").click(function(){
		if (isHidden) {
	    	$("#bild").show();
	    	isHidden = false;
	    } else {
	  		 $("#bild").hide();
	  		 isHidden = true;
		}
	});

	$("#hello").hide();

	$("#usp").click(function(){
		if (isHidden) {
	    	$("#hello").show();
	    	isHidden = false;
	    } else {
	  		 $("#hello").hide();
	  		 isHidden = true;
		}
	});

	$("#tårta").hide();

	$("#ak").click(function(){
		if (isHidden) {
	    	$("#tårta").show();
	    	isHidden = false;
	    } else {
	  		 $("#tårta").hide();
	  		 isHidden = true;
	  	}
	});
}); 


// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCaBRiWwhyyqxglv5ba5EPo2KNheMoMuB4",
    authDomain: "kommentarer-csgo-hemsida.firebaseapp.com",
    databaseURL: "https://kommentarer-csgo-hemsida.firebaseio.com",
    projectId: "kommentarer-csgo-hemsida",
    storageBucket: "",
    messagingSenderId: "375277569510"
  };
  firebase.initializeApp(config);

  var app = angular.module("app", ["firebase"]);

  app.factory("kommentarer", function($firebaseArray) {
    var ref = firebase.database().ref().child("kommentarer");
    return $firebaseArray(ref);
  });
  app.controller("KommentarCtrl", function($scope, kommentarer) {
	 $scope.kommentarer = kommentarer;

    // Definera en kommentar med tom text och skribent
    $scope.kommentar = {
        text: "",
        skribent: ""
    };

    $scope.addComment = function() {
    // Här lägger vi till vår kommentar ($scope.kommentar) till listan med kommentarer.
    // Det sparas automatiskt i Firebase-databasen.
    $scope.kommentarer.$add($scope.kommentar);

    // Tömmer texten i kommentarfältet
    $scope.kommentar = {
        text: "",
        skribent: ""
    };
};
  });

  