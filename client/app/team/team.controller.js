'use strict';

angular.module('intranetApp')
  .controller('TeamCtrl', function ($scope, User) {
    $scope.members = User.getteam();

    $scope.totolink = function(url){
    	var win = window.open(url);
  		win.focus();
    }

    $scope.gototwitter = function(link){
    	var url = 'https://www.twitter.com/'+link;
    	$scope.totolink(url);
    }

    $scope.gotofacebook = function(link){
    	var url = 'https://www.facebook.com/'+link;
    	$scope.totolink(url);
    }

    $scope.gotoxing = function(link){
    	var url = 'https://www.xing.com/'+link;
    	$scope.totolink(url);
    }

    $scope.gotolinkedin = function(link){
    	var url = 'https://www.linkedin.com/'+link;
    	$scope.totolink(url);
    }



  });
