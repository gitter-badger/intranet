/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Anouncement = require('./anouncement.model');

exports.register = function(socket) {
  Anouncement.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Anouncement.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('anouncement:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('anouncement:remove', doc);
}