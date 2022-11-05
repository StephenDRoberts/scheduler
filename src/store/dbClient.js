import { dbConfig } from './mySqlConfig.js'
import mysql from 'mysql2/promise';

export const dbClient = async () => {
  const con = await mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
  });

  return con
}
