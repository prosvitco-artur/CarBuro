const {Sequelize} = require('sequelize');
require('sequelize-hierarchy')(Sequelize);
const config = require('config'); 
 
module.exports = new Sequelize(
    config.get('dbConfig.dbName'),
    config.get('dbConfig.dbUser'),
    config.get('dbConfig.dbPassword'),
    {
        dialect: 'postgres',
        host: config.get('dbConfig.host'),
        port: config.get('dbConfig.dbPort'),
    }
)