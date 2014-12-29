/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';


var User = require('../api/user/user.model');
var Anouncement = require('../api/anouncement/anouncement.model');

Anouncement.find({}).remove(function() {
  Anouncement.create({
    title : 'New intranet available',
    text : 'We have our own intranet now. Bloody awesome!',
    active : true,
    created_at: new Date(),
    author: 'admin',
    tags: [{ tag: 'General' }],
    teaser: 'Awesome new intranet',
  },
  {
    title : 'Holidays until the end of the year',
    text : 'Everyone can stay at home for the rest of year',
    active : true,
    created_at: new Date(),
    author: 'admin',
    tags: [{ tag: 'General' }],
    teaser: 'Holidays!!!!',
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});