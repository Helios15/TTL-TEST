import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BalancedBracketDTO } from 'src/dtos/balancedBracket.dto';
import { DiabloDTO } from 'src/dtos/diablo.dto';
import { FriendlyMatchDTO } from 'src/dtos/friendlyMatch.dto';
import { AppService } from './app.service';

@Controller('test-api')
@ApiTags('test-api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('play-diablo')
  playDiablo(@Body() input: DiabloDTO) {
    return this.appService.diablo(input);
  }

  @Post('check-balance-bracket')
  checkBalancedBrackets(@Body() input: BalancedBracketDTO) {
    return this.appService.checkBalancedBrackets(input);
  }

  @Post('friendly-match')
  friendlyMatch(@Body() input: FriendlyMatchDTO) {
    return this.appService.countNumberOfPossibleWaysOfMatchResult(input);
  }
}
