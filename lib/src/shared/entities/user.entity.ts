import {Column, Entity, OneToMany} from "typeorm";
import {DBTable} from "../enums";
import {Borrow} from "./borrow.entity";
import {BaseEntity} from "./base.entity";

@Entity(DBTable.USERS)
export class User extends BaseEntity {
  @Column()
  name: string;

  @OneToMany(() => Borrow, (borrow) => borrow.borrowedBy)
  borrows: Borrow[];

  toResponse(): Partial<User> {
    const responseUser = new User();
    responseUser.id = this.id;
    responseUser.name = this.name;
    return responseUser;
  }
}
