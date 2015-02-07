'use strict';

describe('Filter: <%= name %>', function () {

  // load the filter's module
  beforeEach(module('<%= appName %>'));

  // initialize a new instance of the filter before each test
  var <%= name %>;
  beforeEach(inject(function ($filter) {
    <%= name %> = $filter('<%= name %>');
  }));

  it('should return the input prefixed with "<%= name %> filter:"', function () {
    var text = 'angularjs';
    expect(<%= name %>(text)).toBe('<%= name %> filter: ' + text);
  });

});
