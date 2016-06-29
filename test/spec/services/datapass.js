'use strict';

describe('Service: datapass', function () {

  // load the service's module
  beforeEach(module('messimapaApp'));

  // instantiate service
  var datapass;
  beforeEach(inject(function (_datapass_) {
    datapass = _datapass_;
  }));

  it('should do something', function () {
    expect(!!datapass).toBe(true);
  });

});
