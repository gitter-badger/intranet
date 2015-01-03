'use strict';

angular.module('intranetApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/team', {
        templateUrl: 'app/team/team.html',
        controller: 'TeamCtrl'
      });
  });
