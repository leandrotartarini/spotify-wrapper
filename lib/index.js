"use strict";

var _search = require("./search");

var _album = require("./album");

module.exports = {
  search: _search.search,
  searchArtists: _search.searchArtists,
  searchAlbums: _search.searchAlbums,
  searchPlaylists: _search.searchPlaylists,
  getAlbum: _album.getAlbum,
  getAlbums: _album.getAlbums,
  getTracks: _album.getTracks
};