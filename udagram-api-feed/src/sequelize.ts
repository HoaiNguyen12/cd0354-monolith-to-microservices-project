import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';

export const sequelize = new Sequelize({
  'username': config.username,
  'password': config.password,
  'database': config.database,
  'host': config.host,
  // 'ssl' : true,
  // 'sslfactory' : 'org.postgresql.ssl.NoneValidatingFactory',
  'dialect': config.dialect,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // added for compatibility with RDS
    }},
  'storage': ':memory:',
});
