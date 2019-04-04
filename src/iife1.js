myApp.iife1 = (function ($) {
  'use strict';

  var Model= {
  
  },
  View = {
  
  },
  Controller = {
  	addText: function addText() {
    	$('#for-iife1').html('<p>Adding InnerHTML iife1</p>')
    },
    init: function init() {
    	console.log("In iife1:init()")
      Controller.addText()
    }
  }

  return {
    init: Controller.init
  };
})(jQuery);
