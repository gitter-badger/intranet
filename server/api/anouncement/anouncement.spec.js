'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');
var User = require('../user/user.model');
var cookie;

var user = new User({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
});

function loginUser() {
    return function(done) {
        request
            .post('/auth/local')
            .send({ email: 'test@test.com', password: 'test' })
            .expect(200)
            .end(onResponse);

        function onResponse(err, res) {
            res.should.have.status(200);
            cookie = res.headers['set-cookie'];
           if (err) return done(err);
           return done();
        }
    };
};

describe('GET /api/anouncements', function() {

  it('should return unauthorised ', function(done){
    request(app)
      .get('/api/anouncements')
      .expect(401)
      .end(function(err, res) {
        done();
      });
  })

});