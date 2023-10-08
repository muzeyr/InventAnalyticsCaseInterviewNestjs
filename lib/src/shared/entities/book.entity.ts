import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
} from "typeorm";
import {DBTable} from "../enums";
import {Borrow} from "./borrow.entity";
import {BaseEntity} from "./base.entity";

@Entity(DBTable.BOOKS)
export class Book extends BaseEntity {

  @Column({nullable: false})
  name: string;

  @OneToMany(() => Borrow, (borrow) => borrow.book)
  borrows: Borrow[];

  toPayload(): Partial<Book> {
    return {
      id: this.id,
      name: this.name,
    };
  }
}
