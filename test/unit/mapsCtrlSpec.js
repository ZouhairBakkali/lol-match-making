'use strict';

/* jasmine specs for controllers go here */

describe('MapsCtrl', function(){
  beforeEach(module('LoL'));

  var ctrl = LoL.MapsCtrl;

  it('should be testable!', inject(function() {
    expect(ctrl.testable()).toBe(true);
  }));
});
