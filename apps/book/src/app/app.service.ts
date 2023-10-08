import {Injectable} from '@nestjs/common';
import {Book, Borrow, CreateBookDto} from "@invent-analytics/lib";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class AppService {

  constructor(@InjectRepository(Book)
              private readonly bookRepo: Repository<Book>) {

  }

  getData(): { message: string } {
    return {message: 'Hello API'};
  }

  async getById(bookId: string) {
    const result = await this.bookRepo.findOne({
      where: {
        id: bookId,
      },
    });

    return result;

  }

  async getBooks() {
    return await this.bookRepo.find()

  }

  async create(createBookDto: CreateBookDto) {
    const _book = await this.bookRepo.create();
    _book.name = createBookDto.name;
    return await this.bookRepo.save(_book);

  }
}
