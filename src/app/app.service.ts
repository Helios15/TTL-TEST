import { BadRequestException, Injectable } from '@nestjs/common';
import { BalancedBracketDTO } from 'src/dtos/balancedBracket.dto';
import { DiabloDTO } from 'src/dtos/diablo.dto';
import { checkForBracketsBalanced } from 'src/helper/balancedBracket';
import { minGoldToPassLevel } from 'src/helper/diablo';
import { calculateBinomialCoefficient } from 'src/helper/friendlyMatch';
import { FriendlyMatchDTO } from '../dtos/friendlyMatch.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  diablo(payload: DiabloDTO) {
    const { m, k, c, d } = payload;
    let result: number = minGoldToPassLevel(m, d, k, c);
    return result;
  }

  checkBalancedBrackets(payload: BalancedBracketDTO) {
    const { numberOfTestCases, testCase } = payload;
    let result: boolean[] = [];
    if (0 >= numberOfTestCases || numberOfTestCases > 100)
      throw new BadRequestException('Invalid number of test cases');
    for (let i = 0; i < numberOfTestCases; i++) {
      const isBalancedBracket = checkForBracketsBalanced(testCase[i]);
      result.push(isBalancedBracket);
    }
    return result;
  }

  countNumberOfPossibleWaysOfMatchResult(payload: FriendlyMatchDTO): number[] {
    const { numberOfTestCases, testCase } = payload;
    let result: number[] = [];
    if (0 >= numberOfTestCases || numberOfTestCases > 100)
      throw new BadRequestException('Invalid number of test cases');
    if (testCase.length !== numberOfTestCases * 2)
      throw new BadRequestException('Not enough data');

    for (let i = 0; i < numberOfTestCases; i++) {
      const firstTeamGoals = testCase[i * 2];
      const secondTeamGoals = testCase[i * 2 + 1];
      if (
        firstTeamGoals * secondTeamGoals < 0 ||
        firstTeamGoals * secondTeamGoals > 100
      )
        throw new BadRequestException('Invalid number of goals');
      const totalPossibleWays = calculateBinomialCoefficient(
        firstTeamGoals + secondTeamGoals,
        firstTeamGoals,
      );
      result.push(totalPossibleWays);
    }
    return result;
  }
}
