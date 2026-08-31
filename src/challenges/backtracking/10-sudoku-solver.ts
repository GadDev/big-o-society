/**
 * Exercise 10 — Sudoku Solver — Boss Fight
 * Difficulty: Hard | Mastery: L5 Combine
 * Skill: Constraint propagation + backtracking
 *
 * Problem:
 *   Solve the 9×9 Sudoku in place. Empty cells are ".". The input has exactly one solution.
 *
 * Goal: given a 9×9 `board` with digits "1"-"9" and "." for empty cells,
 * fill in the empty cells in place so every row, column, and 3×3 box
 * contains each digit 1-9 exactly once. The puzzle has exactly one solution.
 * Example: board with row0 "53..7...." -> after solving, row0 becomes
 *          "534678912" and row8 becomes "345286179", with no "." remaining.
 *
 * Recognition trigger: pick an empty cell, try legal values, undo failures
 *
 * Before coding, say aloud:
 *   1. What clue points to Backtracking?
 *   2. What state/invariant must stay true after every move or recursive call?
 *
 * Critical explanation question:
 *   Why is the next choice/expansion/state transition safe, and what work does it eliminate?
 *
 * Complexity target:
 *   Time: Exponential worst case
 *   Space: O(81) recursion + constraint sets
 */

export function solveSudoku(board: string[][]): void {
  // TODO: Solve the board in place.
  throw new Error('Not implemented');
}
