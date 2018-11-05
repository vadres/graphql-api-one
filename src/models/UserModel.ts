import * as Sequelize from "sequelize";
import { BaseModelInterface } from "../interfaces/BaseModelInterface";

export interface UserAttributtes {
  id?: number
  name?: string
  email?: string
  password?: string
  photo?: string

}

export interface UserInstance extends Sequelize.Instance<UserAttributtes>, UserAttributtes {
  isPassword(encodedPass: string, pass: string): boolean;
}

export interface UserModel extends BaseModelInterface, Sequelize.Model<UserInstance, UserAttributtes>{}