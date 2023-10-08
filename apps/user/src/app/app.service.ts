import {Injectable} from '@nestjs/common';
import {BaseException, Book, Borrow, CreateUserDto, ReturnDto, User} from "@invent-analytics/lib";
import {IsNull, Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {isDefined} from "@nestjs/class-validator";

@Injectable()
export class AppService {

  constructor(@InjectRepository(User)
              private readonly userRepo: Repository<User>,
              @InjectRepository(Book)
              private readonly bookRepo: Repository<Book>,
              @InjectRepository(Borrow)
              private readonly borrowRepo: Repository<Borrow>,) {
  }

  async getUsers() {
    return await this.userRepo.find();

  }

  async getById(id: string) {
    const _user = await this.userRepo.findOne({
      where: {
        id,
      },
      relations: ['borrows', 'borrows.book']
    });
    if (!isDefined(_user)) {
      throw new BaseException('User not found', 404);
    }
    const currentBorrows = _user.borrows.filter((borrow) => !borrow.returnDate);
    const pastBorrows = _user.borrows.filter((borrow) => borrow.returnDate);
    const userInfo = {
      id: _user.id,
      name: _user.name,
      currentBorrows: currentBorrows.map((borrow) => ({
        book: {name: borrow.book.name, id: borrow.book.id},
        borrowDate: borrow.createdAt,
      })),
      pastBorrows: pastBorrows.map((borrow) => ({
        book: {name: borrow.book.name, id: borrow.book.id},
        borrowDate: borrow.createdAt,
        returnDate: borrow.returnDate,
      })),
    };
    return userInfo;

  }

  async create(createUserDto: CreateUserDto) {
    const _newUser = await this.userRepo.create();
    _newUser.name = createUserDto.name;
    return await this.userRepo.save(_newUser);
  }


  async findUserById(userId: string) {
    const user = await this.userRepo.findOne({
      where: {
        id: userId,
      },
    });
    if (!user) {
      throw new BaseException('User not found', 404);
    }
    return user;
  }

  async findBookById(bookId: string) {
    const book = await this.bookRepo.findOne({
      where: {
        id: bookId,
      },
    });
    if (!book) {
      throw new BaseException('Book not found', 404);
    }
    return book;
  }

  async borrow(userId: string, bookId: string) {
    const user = await this.findUserById(userId);
    const book = await this.findBookById(bookId);

    const existingBorrow = await this.borrowRepo.findOne({
      where: {
        bookId: book.id,
        returnDate: IsNull(),
      },
    });

    if (existingBorrow) {
      throw new BaseException('This book already reserved', 404);
    }

    const borrow = this.borrowRepo.create();
    borrow.borrowedBy = user;
    borrow.book = book;

    return await this.borrowRepo.save(borrow);
  }

  async return(userId: string, bookId: string, returnDto: ReturnDto) {
    const user = await this.findUserById(userId);
    const book = await this.findBookById(bookId);

    const borrow = await this.borrowRepo.findOne({
      where: {
        bookId: book.id,
        borrowedById: user.id,
      },
    });

    if (!borrow) {
      throw new BaseException('Borrow not found', 404);
    }

    borrow.returnDate = new Date();
    borrow.score = returnDto.score;

    return await this.borrowRepo.save(borrow);
  }

}
