import { Field, Int, ObjectType } from "@nestjs/graphql";
@ObjectType()
export class Book {
  @Field(type => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  author: string;

  @Field()
  isBorrowed: boolean = false;
}
