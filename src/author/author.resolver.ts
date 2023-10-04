import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Author } from './author.model';
import { AuthorService } from './author.service';

@Resolver(Author)
export class AuthorResolver {
    constructor(
        private authorsService: AuthorService
    ) { }

    @Query(returns => Author)
    async author(@Args('id', { type: () => Int }) id: number) {
        return this.authorsService.findOneById(id);
    }
}
