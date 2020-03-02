 var firebaseConfig = {
    apiKey: "AIzaSyCmpYODjKNt4IJIFXvXni4KFeCDs7z28hc",
    authDomain: "maxapp-245e8.firebaseapp.com",
    databaseURL: "https://maxapp-245e8.firebaseio.com",
    projectId: "maxapp-245e8",
    storageBucket: "maxapp-245e8.appspot.com",
    messagingSenderId: "161381317937",
    appId: "1:161381317937:web:b9d85b7b8b06200df88410",
    measurementId: "G-4WJGE3TRY6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

angular.module('starter.controllers', [])

.controller("Registro", function($scope, $rootScope){
  $scope.obtener = function(usuario){
    firebase.auth().createUserWithEmailAndPassword(usuario.Correo, usuario.Contra).then(function Listo(x){
      swal("Listo", "Registro correctamente", "success" );
      firebase.database().ref("/usuario"+x.user.uid).set({
        correo:usuario.Correo
      });
      // Cerrar la sesión 
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });





    }).catch(function(error) {
       // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      swal("Error",errorMessage, "error");
    });
  }

})

.controller('DashCtrl', function($scope) {
  $scope.categoria = [
  {
    nombre: "Tv y Video",
    icono: "ion-monitor"
  },
  {
    nombre: "Celulares",
    icono: "ion-android-call"
  },
  {
    nombre: "Linea blanca",
    icono: "ion-ios7-home"
  },
  {
    nombre: "Videojuegos",
    icono: "ion-game-controller-b"
  },
  {
    nombre: "Electrodomesticos",
    icono: "ion-coffee"
  },
  {
    nombre: "Computadoras y Tablets",
    icono: "ion-ios7-monitor"
  },
  {
    nombre: "Audio",
    icono: "ion-ios7-pause"
  },
  {
    nombre: "Audio para Vehiculos",
    icono: "ion-model-s"
  },
  {
    nombre: "Camaras y Drones",
    icono: "ion-ios7-camera"
  }
  ]
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
