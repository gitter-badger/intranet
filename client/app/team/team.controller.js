'use strict';

angular.module('intranetApp')
  .controller('TeamCtrl', function ($scope, User) {
    $scope.members = User.getteam();
  });
