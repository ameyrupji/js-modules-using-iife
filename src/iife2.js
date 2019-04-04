myApp.iife2 = (function ($) {
  'use strict';

  var Model= {
  
  },
  View = {
  
  },
  Controller = {
    addText: function addText() {
      $('#for-iife2').html('<p>Adding InnerHTML iife2</p>')
    },
    init: function init() {
      console.log("In iife2:init()")
      Controller.addText()
    }
  }

  return {
    init: Controller.init
  };
})(jQuery);
