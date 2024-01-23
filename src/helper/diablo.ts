/**
 * This is a function to calculate min golds needed to pass level
 * @param {number} m - total goals of 2 teams.
 * @param {number} d - total goals of first team.
 * @param {number} k - total goals of 2 teams.
 * @param {number} c - total goals of first team.
 * @returns {number} goldNeeded - The total golds needed to pass level.
 */
export function minGoldToPassLevel(
  m: number,
  d: number,
  k: number,
  c: number,
): number {
  if (
    !(
      0 <= m &&
      m <= 1000 &&
      0 <= k &&
      k <= 1000 &&
      0 <= c &&
      c <= 1000 &&
      0 < d &&
      d <= 1000
    )
  ) {
    // Input values are not within the specified ranges
    return -1;
  }
  if (k > d || (k === d && m > 1)) {
    // It's impossible to defeat a monster if k > d or k === d but m > 1
    return -1;
  }
  if (k === 0) return 0;
  let remainingDurability = d;
  let goldNeeded = 0;

  for (let i = 0; i < m; i++) {
    if (remainingDurability - k <= 0 && m - i - 1 > 0) {
      // Repair the sword if its durability is not enough for the next monster
      goldNeeded += c;
      remainingDurability = d;
    }

    remainingDurability -= k;
  }

  return goldNeeded;
}
