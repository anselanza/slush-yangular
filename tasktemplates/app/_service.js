'use strict';

angular.module('<%= appName %>')
  .service('<%= name %>', function() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var  values = {
      value: 42
    };

    return values;
  });
