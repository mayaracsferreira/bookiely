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
            })),
            findAll: jest.fn((books: [Book]) => ([
              {
                id: 1234,
                title: 'O calibã e a bruxa'
              },
              {
                id: 123,
                title: 'Para toda eternidade'
              },
              {
                id: 321,
                title: 'Verdades do além túmulo'
              }
            ])),
            findAllBooksByAuthor: jest.fn((name: string) => ([
              {
                id: 123,
                title: 'Para toda eternidade'
              },
              {
                id: 321,
                title: 'Verdades do além túmulo'
              }]))
          }),
        },
      ],
    }).compile();

    resolver = module.get<BookResolver>(BookResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should find an book', async () => {
    const book = await resolver.book(1234);
    expect(book).toEqual(
      {
        id: 1234,
        title: 'O calibã e a bruxa'
      }
    )
  });

  it('should find all books', async () => {
    const books = await resolver.books();
    expect(books).toEqual(
      [
        {
          id: 1234,
          title: 'O calibã e a bruxa'
        },
        {
          id: 123,
          title: 'Para toda eternidade'
        },
        {
          id: 321,
          title: 'Verdades do além túmulo'
        }
      ])
  });

  it('should find all books by author', async () => {
    const book = await resolver.booksbyAuthor('Caitlin Doughty')
    expect(book).toEqual([
      {
        id: 123,
        title: 'Para toda eternidade'
      },
      {
        id: 321,
        title: 'Verdades do além túmulo'
      }])
  });

  describe('create', () => {
    it('should create a book', async () => {
      const book = await resolver.create(
        1234,
        'O calibã e a bruxa'
      )
      expect(book).toEqual(
        {
          id: 1234,
          title: 'O calibã e a bruxa'
        }
      )
    })
  });
});
