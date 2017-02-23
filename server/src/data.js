const villains = require('./data/villains');
const environments = require('./data/environments');
const heroes = require('./data/heroes');

let entities = villains.concat(environments).concat(heroes);

module.exports = entities;
