/**
 * Exercise 9 — N-Queens
 * Difficulty: Hard | Mastery: L4→L5
 * Skill: Constraint sets
 *
 * Problem:
 *   Return every valid n-queens board using "Q" and ".".
 *
 * Goal: given an integer `n`, return all distinct solutions to placing `n`
 * queens on an n×n board so no two queens attack each other, each solution
 * as an array of row-strings using "Q" and ".".
 * Example: n=4 -> 2 boards, e.g. [".Q..","...Q","Q...","..Q."] and its mirror;
 *          n=1 -> [["Q"]] (a single queen trivially doesn't attack itself).
 *
 * Recognition trigger: place one queen per row while columns and diagonals stay conflict-free
 *
 * Before coding, say aloud:
 *   1. What clue points to Backtracking?
 *   2. What state/invariant must stay true after every move or recursive call?
 *
 * Critical explanation question:
 *   Why is the next choice/expansion/state transition safe, and what work does it eliminate?
 *
 * Complexity target:
 *   Time: O(n!)
 *   Space: O(n) recursion + constraint sets
 */

export function solveNQueens(n: number): string[][] {
  // TODO: Return every valid n-queens board using "Q" and ".".
  throw new Error('Not implemented');
}
