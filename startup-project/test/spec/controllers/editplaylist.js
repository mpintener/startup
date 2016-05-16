'use strict';

describe('Controller: EditplaylistctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('startupProjectApp'));

  var EditplaylistctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditplaylistctrlCtrl = $controller('EditplaylistctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditplaylistctrlCtrl.awesomeThings.length).toBe(3);
  });
});
