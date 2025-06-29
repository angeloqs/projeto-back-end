const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    logging: false
  }
);

// Teste a conexão
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco estabelecida.');
  } catch (error) {
    console.error('Erro na conexão:', error);
  }
})();

module.exports = sequelize;