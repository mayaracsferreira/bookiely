import { Controller, Get, NotImplementedException } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthorService } from './author/author.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly authorService: AuthorService
    ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  addBook(): string {
    // Not implemented
    throw new NotImplementedException();
  }

  removeBook(): string {
    // Not implemented
    throw new NotImplementedException();
  }

  borrowBook(): string {
    // Not implemented
    throw new NotImplementedException();
  }

  returnBook(): string {
    // Not implemented
    throw new NotImplementedException();
  }
}
