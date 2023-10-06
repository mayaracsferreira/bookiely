import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book } from './book.model';
import { BookService } from './book.service';

@Resolver(Book)
export class BookResolver {
    constructor(
        private bookService: BookService,
    ) { }

    @Mutation()
    async create(
        @Args('id', { type: () => Int }) id: number,
        @Args('title') title: string,    
    ): Promise<Book>{
        return await this.bookService.create({id, title});
    }

    @Query(returns => Book)
    async book(@Args('id', { type: () => Int }) id: number) {
        return this.bookService.findOneById(id);
    }

    @Query(returns => [Book])
    async books(){
        return this.bookService.findAll();
    }

    @Query(returns => [Book])
    async booksbyAuthor(@Args('name', { type: () => String }) name: string) {
        return this.bookService.findAllBooksByAuthor(name);
    }
}
