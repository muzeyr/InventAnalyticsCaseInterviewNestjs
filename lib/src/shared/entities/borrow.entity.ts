import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import {DBTable} from "../enums";
import {User} from "./user.entity";
import {Book} from "./book.entity";
import {BaseEntity} from "./base.entity";

@Entity(DBTable.BORROWS)
export class Borrow extends BaseEntity {
  @Column({default: 0, nullable: true})
  score: number;

  @ManyToOne(() => User, (user) => user.borrows)
  @JoinColumn({name: "borrowedById"})
  borrowedBy: User;

  @Column({
    type: 'varchar',
    length: 36,
  })
  borrowedById: string;

  @ManyToOne(() => Book, (book) => book.borrows)
  @JoinColumn({name: "bookId"})
  book: Book;

  @Column({
    type: 'varchar',
    length: 36,
  })
  bookId: string;

  @Column({type: "timestamp", nullable: true})
  returnDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  toResponse(): Partial<Borrow> {
    const responseUser = new Borrow();
    responseUser.id = this.id;
    responseUser.borrowedBy = this.borrowedBy;
    responseUser.book = this.book;
    responseUser.returnDate = this.returnDate;

    return responseUser;
  }
}
