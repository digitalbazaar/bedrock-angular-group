/*!
 * Group Service.
 *
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 *
 */
define([], function() {

'use strict';

function register(module) {
  module.service('brGroupService', factory);
}

/* @ngInject */
function factory(
  $rootScope, $routeParams, brRefreshService, brResourceService, config) {
  var service = {};
  var config = config.data.identity;
  service.basePath = config.baseUri;

  service.collection = new brResourceService.Collection({
    url: config.baseUri
  });
  service.state = service.collection.state;

  // register for system-wide refreshes
  brRefreshService.register(function() {
    if(service.group) {
      service.collection.get(service.group.id);
    }
  });

  // expose service to scope
  $rootScope.app.services.group = service;

  return service;
}

return register;

});
