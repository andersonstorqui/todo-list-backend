import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Task = sequelize.define('Task', {
  idtasks: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  tasks: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
}, {
  timestamps: false, 
});

export default Task;
