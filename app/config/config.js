import * as dotenv from 'dotenv'
dotenv.config()
const { DB_HOST,DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env;

{
  development: {
    username: DB_USERNAME;
    password: DB_PASSWORD;
    database: DB_NAME;
    host: DB_HOST;
    dialect: "postgres";
  };
  test: {
    username: DB_USERNAME;
    password: DB_PASSWORD;
    database: DB_NAME;
    host: DB_HOST;
    dialect: "postgres";
  };
  production: {
    username: DB_USERNAME;
    password: DB_PASSWORD;
    database: DB_NAME;
    host: DB_HOST;
    dialect: "postgres";
  }
}
