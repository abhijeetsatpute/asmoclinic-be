import bcrypt from "bcrypt";
import {
  AutoIncrement,
  BeforeCreate,
  BeforeUpdate,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from "sequelize-typescript";
import { UserType } from "./userType.entity";

@Table({
  paranoid: true,
  timestamps: true,
  freezeTableName: true,
  tableName: "user",
})
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id!: number;

  @Unique
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  username!: string;

  @Unique
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;

  @ForeignKey(() => UserType)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userTypeId!: number;

  @BelongsTo(() => UserType)
  userType!: UserType;

  @BeforeCreate
  static async hashPassword(instance: User) {
    instance.password = await bcrypt.hash(instance.password, 10);
  }

  @BeforeUpdate
  static async hashUpdatedPassword(instance: User) {
    if (instance.changed("password")) {
      instance.password = await bcrypt.hash(instance.password, 10);
    }
  }
}
