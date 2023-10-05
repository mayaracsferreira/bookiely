import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Book } from './book.model';
import { BookService } from './book.service';

@Resolver(Book)
export class BookResolver {
    constructor(
        private bookService: BookService
    ) { }

    @Query(returns => Book)
    async book(@Args('id', { type: () => Int }) id: number) {
        return this.bookService.findOneById(id);
    }
}
