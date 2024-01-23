import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber } from 'class-validator';

export class FriendlyMatchDTO {
  @ApiProperty()
  @IsNumber()
  numberOfTestCases: number;

  @ApiProperty({
    isArray: true,
    default: [],
  })
  @IsArray()
  testCase: number[];
}
