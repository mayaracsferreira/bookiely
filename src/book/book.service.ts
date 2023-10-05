import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
    findAll() {
        return 'Found all books!';
    }
    findOneById(id: number) {
        return 'Found one book!';
    }
}
