import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Author } from "src/author/author.model";

@ObjectType()
export class Book {
  @Field(type => Int)
  id: number;

  @Field()
  title: string;

  @Field( type => Author, {nullable: false, description: 'Book author'})
  author: Author;

  @Field()
  isBorrowed: boolean = false;
}
