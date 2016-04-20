angular.module('starter.controllers', [])

  .controller('RegisterCtrl', function ($scope) {
    var vm = this;
    vm.submit = function (form) {
      console.log(form);
    }
    $scope.submit = function (form) {
      console.log(form);
    }

  })
  .controller('MainCtrl', function ($scope, $stateParams) {
    $scope.userName = $stateParams.userName;
  })
  .controller('LoginCtrl', function ($scope) {
      $scope.login= function () {
        console.log($scope.userName);
        window.location.href="#/main/"+$scope.userName;
      }
    $scope.register= function () {
      window.location.href="#/register";
    }
  })
  .controller('ChatsCtrl', function ($scope, Chats) {

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      Chats.remove(chat);
    };
  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });
