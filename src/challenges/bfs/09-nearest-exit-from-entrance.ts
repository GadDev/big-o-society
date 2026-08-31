/**
 * Exercise 9 — Nearest Exit from Entrance
 * Difficulty: Medium | Mastery: L4→L5
 * Skill: Boundary-aware BFS
 *
 * Problem:
 *   Return the minimum 4-direction steps from entrance to any other boundary cell containing ".", or -1.
 *
 * Goal: given a maze of "." (open) and "+" (wall) cells and an entrance
 * coordinate, return the fewest 4-direction steps to reach any open
 * boundary cell other than the entrance itself, or -1 if no such exit is
 * reachable.
 * Example: maze [["+","+",".","+"],[".",".",".","+"],["+","+","+","."]],
 *          entrance [1,2] -> 1 (move up to the open top-row boundary cell [0,2]);
 *          maze [["+","+","+"],[".",".","."],["+","+","+"]], entrance [1,0] -> 2
 *          (must cross the open row to reach boundary cell [1,2]).
 *
 * Recognition trigger: nearest valid boundary from a start -> BFS with a special goal condition
 *
 * Before coding, say aloud:
 *   1. What clue points to Breadth-First Search (BFS)?
 *   2. What state/invariant must stay true after every move or recursive call?
 *
 * Critical explanation question:
 *   Why is the next choice/expansion/state transition safe, and what work does it eliminate?
 *
 * Complexity target:
 *   Time: O(rows × cols)
 *   Space: O(rows × cols)
 */

export function nearestExit(maze: string[][], entrance: [number, number]): number {
  // TODO: Return the minimum 4-direction steps from entrance to any other boundary cell containing ".", or -1.
  throw new Error('Not implemented');
}
