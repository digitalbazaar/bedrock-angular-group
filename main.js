/*!
 * Bedrock AngularJS module to manage Groups.
 *
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 *
 */
define([
  'angular',
  './group-service',],
  function(angular) {

'use strict';

var module = angular.module('bedrock.group',
  ['bedrock.config', 'bedrock.resource']);

Array.prototype.slice.call(arguments, 1).forEach(function(register) {
  register(module);
});

});
