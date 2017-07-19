'use strict';

const getBytes = require('../lib/fp.js');
const expect = require('chai').expect;

describe('fp', function() {
  it('should have a valid input path', function(done) {
    getBytes(`${__dirname}/../assets/fake.txt`, 8, function(err) {
      expect(err).to.be.an('error').with.property('code', 'ENOENT');
      done();
    });
  });

  it('should return the first 8 bytes of each asset in order', function(done) {
    let result = '';
    getBytes(`${__dirname}/../assets/one.txt`, 8, function(err, data) {
      result += data;
      getBytes(`${__dirname}/../assets/two.txt`, 8, function(err, data) {
        result += data;
        getBytes(`${__dirname}/../assets/three.txt`, 8, function(err, data) {
          result += data;
          expect(result).to.equal('4c6f72656d206970496e206d616c65734c6f72656d206970');
          done();
        });
      });
    });
  });
});

