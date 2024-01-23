import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class DiabloDTO {
  @ApiProperty()
  @IsNumber()
  m: number;

  @ApiProperty()
  @IsNumber()
  d: number;

  @ApiProperty()
  @IsNumber()
  k: number;

  @ApiProperty()
  @IsNumber()
  c: number;
}
