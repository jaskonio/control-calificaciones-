import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';


class Course extends Model {
  public id!: number;
  public name!: string;
  public description!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Course.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'courses',
    timestamps: true,
  }
);

export { Course };
