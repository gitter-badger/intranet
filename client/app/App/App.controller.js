'use strict';

angular.module('intranetApp')
  .controller('AppCtrl', function ($scope) {
    // config
      $scope.app = {
        name: 'Company',
        version: '2.0.0',
        settings: {
          themeID: 1,
          navbarHeaderColor: 'bg-black',
          navbarCollapseColor: 'bg-white-only',
          asideColor: 'bg-black',
          headerFixed: true,
          asideFixed: true,
          asideFolded: true,
          asideDock: false,
          container: false
        },
        user: 'Test'
      }
  });
