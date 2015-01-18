/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var moment = require('moment');
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
  },
  {
    title : 'Holidays until the end of the year',
    text : 'Everyone can stay at home for the rest of year',
    active : true,
    created_at: new Date(),
    author: 'admin',
    tags: [{ tag: 'General' }],
    teaser: 'Holidays!!!!',
  },
  {
    title : 'Holidays until the end of the year',
    text : 'Everyone can stay at home for the rest of year',
    active : true,
    created_at: new Date(),
    author: 'admin',
    tags: [{ tag: 'General' }],
    teaser: 'Holidays!!!!',
  },
  {
    title : 'Holidays until the end of the year',
    text : 'Everyone can stay at home for the rest of year',
    active : true,
    created_at: new Date(),
    author: 'admin',
    tags: [{ tag: 'General' }],
    teaser: 'Holidays!!!!',
  },
  {
    title : 'Holidays until the end of the year',
    text : 'Everyone can stay at home for the rest of year',
    active : true,
    created_at: new Date(),
    author: 'admin',
    tags: [{ tag: 'General' }],
    teaser: 'Holidays!!!!',
  },
  {
    title : 'Holidays until the end of the year',
    text : 'Everyone can stay at home for the rest of year',
    active : true,
    created_at: new Date(),
    author: 'admin',
    tags: [{ tag: 'General' }],
    teaser: 'Holidays!!!!',
  },
  {
    title : 'Holidays until the end of the year',
    text : 'Everyone can stay at home for the rest of year',
    active : true,
    created_at: new Date(),
    author: 'admin',
    tags: [{ tag: 'General' }],
    teaser: 'Holidays!!!!',
  },
  {
    title : 'Holidays until the end of the year',
    text : 'Everyone can stay at home for the rest of year',
    active : true,
    created_at: new Date(),
    author: 'admin',
    tags: [{ tag: 'General' }],
    teaser: 'Holidays!!!!',
  },
  {
    title : 'Holidays until the end of the year',
    text : 'Everyone can stay at home for the rest of year',
    active : true,
    created_at: new Date(),
    author: 'admin',
    tags: [{ tag: 'General' }],
    teaser: 'Holidays!!!!',
  },
  {
    title : 'Holidays until the end of the year',
    text : 'Everyone can stay at home for the rest of year',
    active : true,
    created_at: new Date(),
    author: 'admin',
    tags: [{ tag: 'General' }],
    teaser: 'Holidays!!!!',
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
    firstname: 'Chuck',
    surname: 'Testa',
    email: 'test@test.com',
    password: 'test',
    dob: moment("1985-01-01"),
    phone: '+1 123 456789',
    mobile: '+1 123 456789',
    facebook: 'zuck',
    twitter: 'khwhahn'
  }, {
    provider: 'local',
    role: 'admin',
    firstname: 'Admin',
    surname: '',
    email: 'admin@admin.com',
    password: 'admin',
    dob: moment("1965-03-01"),
    phone: '+1 123 456789',
    mobile: '+1 123 456789',
    facebook: 'zuck',
    twitter: 'khwhahn'
  },{
    provider: 'local',
    role: 'user',
    surname: 'Vader',
    firstname: 'Darth',
    email: 'darth@deathstar.com',
    password: 'stormtrooper123',
    department: 'Deathstar',
    position: 'Head of Deathstar',
    phone: '+1 - deathstar',
    mobile: '+1 - deathstar',
    facebook: 'zuck',
    twitter: 'khwhahn'
  }, function() {
      console.log('finished populating users');
    }
  );
});