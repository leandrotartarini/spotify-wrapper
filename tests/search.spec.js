import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

global.fetch = require('node-fetch');

import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists } from '../src/search';

describe('Search', () => {
  let stubedFetch;
  let promise;

  beforeEach( () => {
    stubedFetch = sinon.stub(global, 'fetch');
    stubedFetch.resolves({json: () => {} });
  });

  afterEach( () => {
    stubedFetch.restore();
  });

  
  describe('smoke test', () => {
    
    it('should exist the search method', () => {
      expect(search).to.exist;
    });

    it('should exist the searchAlbums method', () => {
        expect(searchAlbums).to.exist;
    });

    it('should exist the searchArtists method', () => {
        expect(searchArtists).to.exist;
    });

    it('should exist the searchTracks method', () => {
        expect(searchTracks).to.exist;
    });

    it('should exist the searchPlaylists method', () => {
        expect(searchPlaylists).to.exist;
    });
  });

  describe('Gereric Search', () => {
    
    it('should call fetch function', () => {
        const artists = search();
        expect(stubedFetch).to.have.calledOnce;
    });

    it('should receive the correct URL', () => {
      
      context('passing one type axios', () => {
        search('Incubus', 'artist').then(response => {
          expect(response.config.url).to.be.eql('https://api.spotify.com/v1/search?q=Incubus&type=artist');
        });
        search('Incubus', 'album').then(response => {
          expect(response.config.url).to.be.eql('https://api.spotify.com/v1/search?q=Incubus&type=album');
        });
      });

      context('passing more than one type', () => {
        search('Incubus', ['artist', 'album']).then(response => {
        expect(response.config.url).to.be.eql('https://api.spotify.com/v1/search?q=Incubus&type=artist,album');
        });
      });
      
      // context('passing more than one type', () => {
      //   search('Incubus', ['artist', 'album']);
      //   expect(stubedFetch).to.have.been
      //     .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist,album');
      // });
    });

    it('should return the JSON data from the Promise', () => {
      const artists = search('Incubus', 'artists');
      //expect(artists.resolveValue).to.be.eql({body: 'json'});
      artists.then((data) => {
        console.log(data);
        expect(data.json()).to.be.eql({body: 'json'});
      });
    });
  });

  describe('searchArtists', () => {
    it('should call fetch function', () => {
      const artists = searchArtists('Incubus');
      expect(stubedFetch).to.have.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const artists = searchArtists('Incubus');
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist')

      const artists2 = searchArtists('Muse');
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Muse&type=artist')
    });
  });

  describe('searchAlbums', () => {
    it('should call fetch function', () => {
      const albums = searchAlbums('Incubus');
      expect(stubedFetch).to.have.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const albums = searchAlbums('Incubus');
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album')

      const albums2 = searchAlbums('Muse');
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Muse&type=album')
    });
  });

  describe('searchTracks', () => {
    it('should call fetch function', () => {
      const tracks = searchTracks('Incubus');
      expect(stubedFetch).to.have.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const tracks = searchTracks('Incubus');
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=track')

      const tracks2 = searchTracks('Muse');
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Muse&type=track')
    });
  });

  describe('searchPlayists', () => {
    it('should call fetch function', () => {
      const playlists = searchPlaylists('Incubus');
      expect(stubedFetch).to.have.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const playlists = searchPlaylists('Incubus');
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist')

      const playlists2 = searchPlaylists('Muse');
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Muse&type=playlist')
    });
  });
});