/* eslint-disable no-console */
const { join } = require('path');
const { readFileSync } = require('fs');
const connection = require('./connection');

const dbBuild = () => {
  const sql = readFileSync(join(__dirname, 'build.sql')).toString();
  return connection.query(sql)
    .then(() => (console.log('Build Successfully!')))
    .catch((e) => console.error('faild to build', e.stack));
};

module.exports = { dbBuild };
