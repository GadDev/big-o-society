/**
 * Exercise 7 — Word Search
 * Difficulty: Medium | Mastery: L4 Adapt
 * Skill: Grid backtracking
 *
 * Problem:
 *   Return whether word can be formed by 4-direction adjacent cells without reusing a cell.
 *
 * Goal: given a 2D character `board` and a string `word`, return whether
 * `word` can be traced through horizontally/vertically adjacent cells,
 * without reusing the same cell twice in one path.
 * Example: board=[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
 *          word="ABCCED" -> true; word="SEE" -> true;
 *          word="ABCB" -> false (the second "B" would reuse the same cell).
 *
 * Recognition trigger: path cannot reuse a cell -> mark, recurse, then restore
 *
 * Before coding, say aloud:
 *   1. What clue points to Backtracking?
 *   2. What state/invariant must stay true after every move or recursive call?
 *
 * Critical explanation question:
 *   Why is the next choice/expansion/state transition safe, and what work does it eliminate?
 *
 * Complexity target:
 *   Time: O(rows × cols × 4^L)
 *   Space: O(L) recursion
 */

export function exist(board: string[][], word: string): boolean {
  // TODO: Return whether word can be formed by 4-direction adjacent cells without reusing a cell.
  throw new Error('Not implemented');
}
