import {IsNotEmpty, MaxLength, MinLength} from "@nestjs/class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateBookDto {

  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(20)
  @ApiProperty({
    description: 'Book Name',
    example: 'Harry Potter and the Sorcerer Stone',
  })
  name: string;

}
