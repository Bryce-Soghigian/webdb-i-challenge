const knex = require('knex');

const configOptions = require('../knexfile').development;

module.exports = knex(configOptions);
let yeet = "12";
parseInt(yeet);
console.log(yeet)