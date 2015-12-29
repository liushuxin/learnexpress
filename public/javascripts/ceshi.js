'use strict';
/**
 * 配置基本库
 * @type {[type]}
 */
require.config({
  baseUrl: MT.STATIC_ROOT + '/javascripts',
  shim: {
    'lib/bootstrap': {
      deps: ['lib/jquery']
    },
    'lib/bootstrap-datepicker': {
      deps: ['lib/jquery', 'lib/bootstrap']
    }
  },
});
require([
  // util
  'lib/jquery',
  'lib/lodash'
], function($,_) {
  alert(4);

}