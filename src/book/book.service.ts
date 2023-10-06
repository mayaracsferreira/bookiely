import { Injectable } from '@nestjs/common';
import { Book } from './book.model';

@Injectable()
export class BookService {
    create(arg0: { id: number; title: string; }): import("./book.model").Book | PromiseLike<import("./book.model").Book> {
        return new Promise((resolve, reject) => {
            resolve( new Book());
        });
    }

    findAll() {
        return 'Found all books!';
    }
    findOneById(id: number) {
        return 'Found one book!';
    }

    findAllBooksByAuthor(name: string) {
        return 'Found all books from author!';
    }
}
