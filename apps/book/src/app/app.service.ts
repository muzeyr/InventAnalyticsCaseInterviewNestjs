import {Injectable} from '@nestjs/common';
import {Book, Borrow, CreateBookDto} from "@invent-analytics/lib";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class AppService {

  constructor(@InjectRepository(Book)
              private readonly bookRepo: Repository<Book>,
              @InjectRepository(Borrow)
              private readonly borrowRepo: Repository<Borrow>) {

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
    const averageScoreQuery = await this.borrowRepo
    .createQueryBuilder('borrow')
    .select('AVG(borrow.score)', 'averageScore')
    .where('borrow.bookId = :bookId', { bookId })
    .andWhere('borrow.returnDate IS NOT NULL')
    .getRawOne();

  // Ortalama puanı book nesnesine ekleyin
    const averageScore = parseFloat(averageScoreQuery.averageScore) || 0;

    return {name:result.name,
    id:result.id,
    averageScore
  }

  }

  async getBooks() {
    return await this.bookRepo.find()

  }

  async create(createBookDto: CreateBookDto) {
    const _book = await this.bookRepo.create();
    _book.name = createBookDto.name;
    const _newBook =  await this.bookRepo.save(_book);
    return _newBook.toPayload();

  }
}
