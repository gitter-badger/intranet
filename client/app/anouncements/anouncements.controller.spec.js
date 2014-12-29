'use strict';

describe('Controller: AnouncementsCtrl', function () {

  // load the controller's module
  beforeEach(module('intranetApp'));

  var AnouncementsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AnouncementsCtrl = $controller('AnouncementsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
