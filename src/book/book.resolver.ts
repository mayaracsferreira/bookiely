import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Book } from './book.model';
import { BookService } from './book.service';
import { AuthorService } from 'src/author/author.service';

@Resolver(Book)
export class BookResolver {
    constructor(
        private bookService: BookService,
        private authorService: AuthorService
    ) { }

    @Query(returns => Book)
    async book(@Args('id', { type: () => Int }) id: number) {
        return this.bookService.findOneById(id);
    }

    @Query(returns => [Book])
    async booksbyAuthor(@Args('name', { type: () => String }) name: string) {
        return this.authorService.findAllBooksByAuthor(name);
    }
}
