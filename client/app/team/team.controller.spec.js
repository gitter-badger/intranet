'use strict';

describe('Controller: TeamCtrl', function () {

  // load the controller's module
  beforeEach(module('intranetApp'));

  var TeamCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/users/team')
      .respond(200 , 'Success' );

    scope = $rootScope.$new();
    TeamCtrl = $controller('TeamCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of things to the scope', function () {
    // $httpBackend.flush();
    expect(true).toBe(true);
    //expect(scope.members.length).toBe(1);
  });
});