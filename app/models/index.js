
import { Sequelize } from "sequelize";
import {oneToOneRelation, oneToManyRelation, manyToManyRelation} from "./relations.js"

// Connecting to database
const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'postgres',
  dialectOptions: {
    // Your pg options here
  }
});



// Synchronizing all models at once
export async function syncDatabase(){
    try {
        await sequelize.sync({ alter: true });
        console.log("All models were synchronized successfully.");
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

import {default as cart} from "./cart.js"

//Model Definition
const modelDefines = [
    cart
]
for(const modelDefiner of modelDefines){
    modelDefiner(sequelize)
}

// set associations


// export {sequelize}

export {sequelize}




