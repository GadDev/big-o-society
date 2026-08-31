/**
 * Exercise 04 — Path Sum
 * Difficulty: Easy | Mastery: L2→L3
 * Skill: DFS with path state
 *
 * Goal: given the root of a binary tree and a target sum, return true if
 * some root-to-leaf path's node values add up exactly to targetSum.
 * Example: tree [5,[4,[11,[7],[2]]],[8,[13],[4,null,[1]]]], target 22
 *          -> true (5+4+11+2); target 26 -> true (5+8+13);
 *          target 5 -> false (no leaf path sums to 5); null tree -> false.
 *
 * Recognition trigger: root-to-leaf condition -> carry remaining target
 *
 * Before coding, say aloud:
 *   1. Why does this problem suggest Depth-First Search (DFS)?
 *   2. What invariant/state will stay true while I scan or recurse?
 *
 * Critical explanation question:
 *   Why must success be checked specifically at a leaf?
 *
 * Complexity target:
 *   Time: O(n)
 *   Space: O(h)
 */

import { TreeNode } from './structures';
export { TreeNode } from './structures';

export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  // TODO: Return whether a root-to-leaf path sums exactly to targetSum.
  throw new Error('Not implemented');
}
