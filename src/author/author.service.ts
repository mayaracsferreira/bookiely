import { Injectable } from '@nestjs/common';
import { Author } from './author.model';

@Injectable()
export class AuthorService {

    createAuthor(id: number, name: string) {       
        // throw new Error('Method not implemented.'); 
        return 'Created an author!';
    }

    findOneById(id: number) {
        // throw new Error('Method not implemented.');
        return 'Found one author!';
    }

    findAll(id: number) {
        // throw new Error('Method not implemented.');
        return 'Found all authors!';
    }
}
