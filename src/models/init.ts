import { Sequelize } from 'sequelize'

const config = require('../config/config.json')
const dbConfig = config["development"];
const sequelize = new Sequelize(
   dbConfig,
)
export default sequelize