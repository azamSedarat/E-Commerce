
import { Sequelize } from "sequelize";

const user = '<postgres user>'
const host = 'localhost'
const database = '<postgres db name>'
const password = '<postgres password>'
const port = '<postgres port>'

// Connecting to database
const sequelize = new Sequelize(database, user, password, {
    host,
    port,
    dialect: 'postgres',
    logging: false,
    define: {
        freezeTableName: true
    }
  })
  

//Synchronizing all models at once
export async function syncDatabase(){
    try {
        await sequelize.sync({ alter: true });
    } catch (error) {
        throw error
    }
}


//Testing the connection
(async function connectionAuthenticate(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})();

// import {default as userModel} from "./user.js"

//Model Definition
const modelDefines = [
    // userModel,
]
for(const modelDefiner of modelDefines){
    modelDefiner(sequelize)
}

// set associations
oneToManyRelation(sequelize.models.User, sequelize.models.Quiz)
superManyToManyRelation(sequelize.models.Quiz, sequelize.models.Question, sequelize.models.QuizItem)


export {sequelize}