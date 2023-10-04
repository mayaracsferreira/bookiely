import { Author } from './author.model';

describe('Author', () => {
  it('should be defined', () => {
    expect(new Author()).toBeDefined();
  });
});
