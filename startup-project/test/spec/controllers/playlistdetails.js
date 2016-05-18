'use strict';

describe('Controller: PlaylistdetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('startupProjectApp'));

  var PlaylistdetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlaylistdetailsCtrl = $controller('PlaylistdetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PlaylistdetailsCtrl.awesomeThings.length).toBe(3);
  });
});
