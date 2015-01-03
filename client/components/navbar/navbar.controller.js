'use strict';

angular.module('intranetApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth, $timeout, $mdBottomSheet) {
    $scope.menu = [{
      'title': 'Dashboard',
      'link': '/'
    },{
      'title': 'Anouncements',
      'link': '/anouncements'
    },{
      'title': 'Team',
      'link': '/team'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });