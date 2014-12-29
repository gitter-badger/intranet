'use strict';

angular.module('intranetApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/anouncements/new', {
        templateUrl: 'app/anouncements/newanouncement.html',
        controller: 'AnouncementAddCtrl'
      })
      .when('/anouncements', {
        templateUrl: 'app/anouncements/anouncements.html',
        controller: 'AnouncementsCtrl'
      })
      .when('/anouncements/:slug', {
      	templateUrl: 'app/anouncements/anouncementdetail.html',
      	controller: 'AnouncementDetailCtrl'
      })
      .when('/anouncements/:slug/edit', {
        templateUrl: 'app/anouncements/anouncementedit.html',
        controller: 'AnouncementEditCtrl'
      })
      
  });
