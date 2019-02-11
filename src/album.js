/* global fetch */

import {API_URL, HEADERS} from './config';
import  toJSON  from './utils';

console.log("api url", API_URL);

export const getAlbum = id => 
  fetch(`${API_URL}/albums/${id}`, HEADERS).then(toJSON);

export const getAlbums = ids =>
  fetch(`${API_URL}/albums/?ids=${ids}`, HEADERS).then(toJSON);

export const getTracks = id =>
  fetch(`${API_URL}/albums/${id}/tracks`, HEADERS).then(toJSON);