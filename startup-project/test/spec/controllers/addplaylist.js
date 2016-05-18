'use strict';

describe('Controller: AddplaylistctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('startupProjectApp'));

  var AddplaylistctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddplaylistctrlCtrl = $controller('AddplaylistctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddplaylistctrlCtrl.awesomeThings.length).toBe(3);
  });
});
