"use strict";

var TOKEN_API = 'BQD6W0G0V8pl-vDHwCYJ-0hA01-TzzWouAPfZ_5bFXIBq1UBfykupjsM1WfAq0i82d_z-jKuzUbhTAa_qJa-rBXwmeEdopfKLTM_EEehDLzG6zYomoamsBb3NKj5Cr7Bn9Dp0rDV2TF3Q7lfCRl0PxNFk8pol5NZfQ2zfExkW5CCxnXhwej_Mg2al2v6_3Q';
var API_URL = 'https://api.spotify.com/v1';
var HEADERS = {
  headers: {
    Authorization: "'Bearer ".concat(TOKEN_API, "'")
  }
};
module.exports = {
  API_URL: API_URL,
  HEADERS: HEADERS
};