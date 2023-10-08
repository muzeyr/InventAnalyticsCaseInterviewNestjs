import {IsNotEmpty, MaxLength, MinLength} from "@nestjs/class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(20)
  @ApiProperty({
    description: 'User Name',
    example: 'Üzeyr ÖZCAN',
  })
  name: string;

}
