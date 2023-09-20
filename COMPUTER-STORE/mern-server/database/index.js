const mongose = require('mongoose');
const { dbHost, dbPort, dbUser, dbName, dbPass } = require('../app/config');
mongose.connect(`mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?authSource=admin`); 
// const { dbUrl } = require("../app/config");
// mongose.connect(dbUrl);
const db = mongose.connection;

module.exports = db;