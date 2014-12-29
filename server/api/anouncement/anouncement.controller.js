'use strict';

var _ = require('lodash');
var Anouncement = require('./anouncement.model');

function finduser(heystack, needle){
  var status = false;
  for(var i = 0; i < heystack.length; i++){
    if(heystack[i] == needle){
      status = true;
    }
  }
  return status;
}

// Get list of anouncements
exports.index = function(req, res) {
  Anouncement.find(function (err, anouncements) {
    if(err) { return handleError(res, err); }
    return res.json(200, anouncements);
  });
};

// Get a single anouncement
exports.show = function(req, res) {


  Anouncement.findOne({ slug: req.params.id } , function (err, anouncement) {

    if(err) { return handleError(res, err); }
    if(!anouncement) { return res.send(404); }

    if(req.user.name != 'undefined' && !finduser(anouncement.read, req.user.name)){
      anouncement.read.push(req.user.name);
      anouncement.save(function (err) {
      if (err) { return handleError(err); }
        return res.json(200, anouncement);
      });
    }
    else{
      return res.json(200, anouncement);
    }
  });

};

// Creates a new anouncement in the DB.
exports.create = function(req, res) {

  var newAnoucement = {
    title: req.body.title,
    teaser: req.body.teaser,
    text: req.body.text,
    active: req.body.active,
    user: req.body.user,
    author: req.user.name,
    created_at: new Date(),

  };

  Anouncement.create(newAnoucement, function(err, anouncement) {
    
    if(err) { return handleError(res, err); }
    return res.json(201, anouncement);
  });
};

// Updates an existing anouncement in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Anouncement.findById(req.params.id, function (err, anouncement) {
    if (err) { return handleError(res, err); }
    if(!anouncement) { return res.send(404); }
    var updated = _.merge(anouncement, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, anouncement);
    });
  });
};

// Deletes a anouncement from the DB.
exports.destroy = function(req, res) {
  Anouncement.findById(req.params.id, function (err, anouncement) {
    if(err) { return handleError(res, err); }
    if(!anouncement) { return res.send(404); }
    anouncement.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}