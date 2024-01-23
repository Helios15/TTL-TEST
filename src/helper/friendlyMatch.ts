/**
 * This is a function to calculate the binomial coefficient
 * @param {number} totalGoals - total goals of 2 teams.
 * @param {number} firstTeamGoals - total goals of first team.
 * @returns {number} result - The total possible ways to get the match result.
 */
/* When you want to calculate total possible ways to get the match result is 
   like you want to find the number of possible cases to get m results from a convolution of m+n elements */
export function calculateBinomialCoefficient(
  totalGoals: number,
  firstTeamGoals: number,
): number {
  if (firstTeamGoals === 0 || firstTeamGoals === totalGoals) {
    return 1;
  }

  let result = 1;
  for (let i = 0; i < firstTeamGoals; i++) {
    result *= (totalGoals - i) / (i + 1);
  }

  return Math.round(result);
}

/**
 * This is a function to calculate the binomial coefficient
 * @param {number} firstTeamGoals - total goals of frist team.
 * @param {number} secondTeamGoals - total goals of second team.
 * @returns {number} result - The total possible ways to get the match result.
 */

/* this is another solution using recursion */
export async function countScoringWays(
  firstTeamGoals: number,
  secondTeamGoals: number,
): Promise<number> {
  const ways = [];
  countWaysRecursively(firstTeamGoals, secondTeamGoals, '', ways);
  return ways.length;
}

export async function countWaysRecursively(
  firstTeamGoals: number,
  secondTeamGoals: number,
  currentWay: string,
  ways: string[],
) {
  if (firstTeamGoals === 0 && secondTeamGoals === 0) {
    // A valid scoring order is found
    ways.push(currentWay);
    return;
  }

  if (firstTeamGoals > 0) {
    // Try scoring a goal for fristTeam
    await countWaysRecursively(
      firstTeamGoals - 1,
      secondTeamGoals,
      currentWay + 'F',
      ways,
    );
  }

  if (firstTeamGoals > 0) {
    // Try scoring a goal for secondTeam
    await countWaysRecursively(
      firstTeamGoals,
      secondTeamGoals - 1,
      currentWay + 'S',
      ways,
    );
  }
}
