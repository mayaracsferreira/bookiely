import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
    findOneById(id: number) {
        return 'Found one author!';
    }
}
