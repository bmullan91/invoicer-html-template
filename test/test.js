#!/usr/bin/env node

var data = require('./data');
var template = require('../');

process.stdout.write(template.render(data));
