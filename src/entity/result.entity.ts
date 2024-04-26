import {
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from "sequelize-typescript";
import { User } from "./user.entity";

@Table({
  paranoid: true,
  timestamps: true,
  freezeTableName: true,
  tableName: "result",
})
export class Result extends Model<Result> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  beforeImage!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  afterImage!: string;
}
