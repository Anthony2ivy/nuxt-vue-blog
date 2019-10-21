const config=require("../../server.config")
const Sequelize = require('sequelize')
const path =require('path')
var sequelize = new Sequelize(undefined, undefined, undefined, {
    host: config.dataBaseHost,
    dialect: 'sqlite',
    storage: path.normalize(config.sqliteStoragePath)
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports=sequelize;
