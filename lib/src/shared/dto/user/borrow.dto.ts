import {IsNotEmpty, Min, Max} from "@nestjs/class-validator";
import {ApiProperty} from "@nestjs/swagger";


export class ReturnDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'Score ',
    example: '1',
  })
  @Min(1)
  @Max(9)
  score: number

}
