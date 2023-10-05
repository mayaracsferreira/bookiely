import { Test, TestingModule } from '@nestjs/testing';
import { AuthorResolver } from './author.resolver';
import { AuthorService } from './author.service';
import { Author } from './author.model';

describe('AuthorResolver', () => {
  let resolver: AuthorResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthorResolver,
        {
          provide: AuthorService,
          useFactory: () => ({
            create: jest.fn((author: Author) => ({
              id: 1234,
              name: 'Silvia Federici'
            })),
            findOneById: jest.fn((id: number) => ({
              id: 1234,
              name: 'Silvia Federici'
            }))
          })
        }
      ],
    }).compile();

    resolver = module.get<AuthorResolver>(AuthorResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should find and return an author', async () => {
    const author = await resolver.author(1234)
    expect(author).toEqual(
      {
        id: 1234,
        name: 'Silvia Federici'
      }
    )
  })
});
