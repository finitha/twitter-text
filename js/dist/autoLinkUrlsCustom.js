"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _autoLinkEntities = _interopRequireDefault(require("./autoLinkEntities"));

var _extractUrlsWithIndices = _interopRequireDefault(require("./extractUrlsWithIndices"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
function _default(text, options) {
  var entities = (0, _extractUrlsWithIndices["default"])(text, {
    extractUrlsWithoutProtocol: false
  });
  return (0, _autoLinkEntities["default"])(text, entities, options);
}

module.exports = exports.default;