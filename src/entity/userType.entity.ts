import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from "sequelize-typescript";

@Table({
  paranoid: true,
  timestamps: true,
  freezeTableName: true,
  tableName: "user_types",
})
export class UserType extends Model<UserType> {
  @PrimaryKey
  @AutoIncrement
  @Unique
  @Column({ type: DataType.INTEGER })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;
}
