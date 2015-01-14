'use strict';

/* jasmine specs for controllers go here */

describe('MatchmakingCtrl', function(){
  beforeEach(module('LoL'));

  var ctrl = LoL.MatchmakingCtrl;

  it('should be testable!', inject(function() {
    expect(ctrl.testable()).toBe(true);
  }));
});
