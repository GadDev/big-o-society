/**
 * Exercise 3 — Jump Game
 * Difficulty: Medium | Mastery: L2 Implement
 * Skill: Farthest reachable frontier
 *
 * Problem:
 *   nums[i] is max jump length. Return whether the last index is reachable.
 *
 * Goal: track the farthest index reachable so far; return whether it can
 * ever reach or pass the last index.
 * Example: [2,3,1,1,4] -> true (reach extends past the last index);
 *          [3,2,1,0,4] -> false (frontier gets stuck at index 3).
 *
 * Recognition trigger: only need to know whether current index is reachable and how far reach can extend
 *
 * Before coding, say aloud:
 *   1. What clue points to Greedy?
 *   2. What state/invariant must stay true after every move or recursive call?
 *
 * Critical explanation question:
 *   Why is the next choice/expansion/state transition safe, and what work does it eliminate?
 *
 * Complexity target:
 *   Time: O(n)
 *   Space: O(1)
 */

export function canJump(nums: number[]): boolean {
  // TODO: nums[i] is max jump length. Return whether the last index is reachable.
  throw new Error('Not implemented');
}
