'use strict';

angular.module('intranetApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth, $timeout) {
    $scope.menu = [{
      'title': 'Dashboard',
      'link': '/',
      'count' : 0, // show pill if count
      'icon' : 'glyphicon-stats',
      'color' : 'text-primary-dker'
    },{
      'title': 'Anouncements',
      'link': '/anouncements',
      'count' : 0, // show pill if count
      'icon' : 'glyphicon-bullhorn',
      'color' : 'text-info-dker'
    },{
      'title': 'Team',
      'link': '/team',
      'count' : 0, // show pill if count
      'icon' : 'glyphicon-user',
      'color' : 'text-success'
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
  })
  .controller('HeaderCtrl', function ($scope, $location, Auth, $timeout) {
    
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