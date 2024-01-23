import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber } from 'class-validator';

export class BalancedBracketDTO {
  @ApiProperty()
  @IsNumber()
  numberOfTestCases: number;

  @ApiProperty({
    isArray: true,
    default: [],
  })
  @IsArray()
  testCase: string[];
}
