/**
 * This is a function to check if a bracket is balanced or not
 * @param {string} bracket - the bracket to check.
 */
export function checkForBracketsBalanced(bracket: string): boolean {
  let i = -1;
  let stack: string[] = [];
  if (bracket.length === 0) return true;
  if (bracket.length > 100000) return false;
  const validChars: string[] = ['(', ')', '[', ']', '{', '}'];
  for (let char of bracket) {
    if (!validChars.includes(char)) return false;
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
      i++;
    } else {
      if (
        i >= 0 &&
        ((stack[i] === '(' && char === ')') ||
          (stack[i] === '{' && char === '}') ||
          (stack[i] === '[' && char === ']'))
      ) {
        stack.pop();
        i--;
      } else {
        return false;
      }
    }
  }
  return i === -1;
}
