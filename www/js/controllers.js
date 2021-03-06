angular.module('starter.controllers', [])

  .controller('RegisterCtrl', function ($scope) {
    var vm = this;
    vm.submit = function (form) {
      console.log(form);
    }
    $scope.submit = function (form) {
      console.log(form);
      window.location.href="#/thread/list";
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
  })
  .controller('ThreadListCtrl',function() {
    var vm = this;
    vm.items = [
      {
        title: '这是第一个主贴',
        poster: '雪狼',
        dateCreated: '2015-02-19T00:00:00'
      },
      {
        title: '这是第二个主贴，含有字母abcd和数字1234',
        poster: '破狼',
        dateCreated: '2015-02-19T15:00:00'
      }
    ];
    for (var i = 0; i < 10; i++) {
      vm.items.push({
        title:'主题'+i,
        poster:'user'+i,
        dateCreated:'2015-02-18T15:00:00'
      })
    }
  })
  .controller("ThreadTreeCtrl", function ThreadTreeCtrl() {
    var vm=this;

    vm.items=[
      {
        id:1,
        title:'这是第一个主题',
        poster:'雪狼',
        dateCreated:"2015-02-19T00:00:00",
        items:[
          {
            id:11,
            title:'这是第一个回复',
            poster:'雪狼',
            dataCreated:'2015-02-19T00:00:01',
            items:[{
              id:111,
              title:'回复1.1',
              poster:'破狼',
              dateCreated:'2015-02-19T00:01:01'
            }]
          },
          {
            id:12,
            title:'这是第二个回复',
            poster:'雪狼',
            dateCreated:'2015-02-19T00:01:03'
          }
        ]
      },
      {
        id:2,
        title:'这是第二个主题，含有字谜abcd和数字1234',
        poster:'破狼',
        dateCreated:'2015-02-19T15:01:03'
      }
    ]

  })

;
