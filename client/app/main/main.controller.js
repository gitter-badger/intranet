'use strict';

angular.module('intranetApp')
  .controller('MainCtrl', function ($scope, $http, socket, Anouncement, Auth, $location, User) {

    // Anouncements
    $scope.anouncements = [];
    $scope.totalanouncements = 0;

    $scope.hasRead = function(user){
      var has = false;
      var CurrentUser = Auth.getCurrentUser();
      _.each(user , function(value,index){
        if(value == CurrentUser.name){
          has = true;
        }
      });
      
      return has;
    }

    $scope.showSeparatorAnouncements = function(index){
      return $scope.totalanouncements > index + 1 ;
    }

    $scope.readAnouncement = function(slug){
      $location.path( "/anouncements/"+slug );
    }

    $scope.filterAnouncements = function(items){
      _.each(items, function(value,index){
        if(!$scope.hasRead(value.read)){
          $scope.anouncements.push(value);

        }
        $scope.totalanouncements = $scope.anouncements.length;
      })
    }

    Anouncement.query(function(response){
      $scope.filterAnouncements(response);
      socket.syncUpdates('anouncement', $scope.anouncements);
    });

    // Birthdays
    $scope.birthdays = [];
    $scope.totalbirthdays = 0;

    $scope.showSeparatorbirthdays = function(index){
      return $scope.totalbirthdays > index + 1 ;
    }

    User.getbirthdays(function(response){
      _.each(response, function(value,index){
          $scope.birthdays.push(value);
        $scope.totalbirthdays = $scope.birthdays.length;
      })
      socket.syncUpdates('birthdays', $scope.birthdays);
    });



  });
