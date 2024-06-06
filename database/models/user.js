/* eslint-disable no-unused-vars */
import { Model, DataTypes } from 'sequelize';
import connection from '../connection';

const initUser = (sequelize, Types) => {
  class User extends Model {}
  User.init(
    {
      username: Types.STRING,
      email: Types.STRING,
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    }
  );
  return User;
};

export default initUser(connection, DataTypes);
