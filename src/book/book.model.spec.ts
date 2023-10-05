import { Book } from "./book.model";

describe('Book', () => {
  it('should be defined', () => {
    expect(new Book()).toBeDefined();
  });
  
  it('should not be borrowed', () => {
    let sut = new Book();
    expect(sut.isBorrowed).toBeFalsy();
  });
});
