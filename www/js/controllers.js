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

angular.module('starter.controllers', [])

.controller("Registro", function($scope, $rootScope){

})

.controller('DashCtrl', function($scope) {})

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
