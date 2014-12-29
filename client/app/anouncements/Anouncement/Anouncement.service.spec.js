'use strict';

describe('Service: Anouncement', function () {

  // load the service's module
  beforeEach(module('intranetApp'));

  // instantiate service
  var Anouncement;
  beforeEach(inject(function (_Anouncement_) {
    Anouncement = _Anouncement_;
  }));

  it('should do something', function () {
    expect(!!Anouncement).toBe(true);
  });

});
