import { Test, TestingModule } from '@nestjs/testing';
import { BookResolver } from './book.resolver';
import { BookService } from './book.service';
import { Book } from './book.model';

describe('BookResolver', () => {
  let resolver: BookResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BookResolver,
        {
          provide: BookService,
          useFactory: () => ({
            create: jest.fn((book: Book) => ({
              id: 1234,
              title: 'O calibã e a bruxa'
            })),
            findOneById: jest.fn((book: Book) => ({
              id: 1234,
              title: 'O calibã e a bruxa'
            }))
          })
        }

      ],
    }).compile();

    resolver = module.get<BookResolver>(BookResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should find and return an book', async () => {
    const book = await resolver.book(1234)
    expect(book).toEqual(
      {
        id: 1234,
        title: 'O calibã e a bruxa'
      }
    )
  })
});
