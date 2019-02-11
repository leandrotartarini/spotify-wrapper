"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTracks = exports.getAlbums = exports.getAlbum = void 0;

var _config = require("./config");

var _utils = _interopRequireDefault(require("./utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global fetch */
console.log("api url", _config.API_URL);

var getAlbum = function getAlbum(id) {
  return fetch("".concat(_config.API_URL, "/albums/").concat(id), _config.HEADERS).then(_utils.default);
};

exports.getAlbum = getAlbum;

var getAlbums = function getAlbums(ids) {
  return fetch("".concat(_config.API_URL, "/albums/?ids=").concat(ids), _config.HEADERS).then(_utils.default);
};

exports.getAlbums = getAlbums;

var getTracks = function getTracks(id) {
  return fetch("".concat(_config.API_URL, "/albums/").concat(id, "/tracks"), _config.HEADERS).then(_utils.default);
};

exports.getTracks = getTracks;