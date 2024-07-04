import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import { Student } from './Student';
import { Subject } from './Subject';
import { EvaluativeActivity } from './EvaluativeActivity';

class Grade extends Model {
  public id!: number;
  public calification!: number;
  public studentId!: number;
  public evaluateActivityId!: number;
  public registryDate!: Date;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Grade.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    calification: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    studentId: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: Student,
        key: 'id',
      },
      allowNull: false,
    },
    evaluateActivityId: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: EvaluativeActivity,
        key: 'id',
      },
      allowNull: false,
    },
    registryDate: {
      type: new DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'grades',
    timestamps: true,
  }
);

export { Grade };
