'use strict';

var express = require('express');
var controller = require('./anouncement.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', auth.hasRole('guest'), controller.index);
router.get('/:id', auth.hasRole('guest'), controller.show);
router.post('/', auth.hasRole('creator'), controller.create);
router.put('/:id', auth.hasRole('admin'), controller.update);
router.patch('/:id', auth.hasRole('admin'), controller.update);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);

module.exports = router;