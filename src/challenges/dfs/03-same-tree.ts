/**
 * Exercise 03 — Same Tree
 * Difficulty: Easy | Mastery: L2 Implement
 * Skill: Parallel DFS
 *
 * Goal: given the roots of two binary trees, return true if they are
 * structurally identical and every corresponding node holds the same value.
 * Example: [1,[2],[3]] vs [1,[2],[3]] -> true (identical shape and values);
 *          [1,[2],null] vs [1,null,[2]] -> false (same values, different shape);
 *          null vs null -> true (two empty trees are equal).
 *
 * Recognition trigger: compare two recursive structures node by node
 *
 * Before coding, say aloud:
 *   1. Why does this problem suggest Depth-First Search (DFS)?
 *   2. What invariant/state will stay true while I scan or recurse?
 *
 * Critical explanation question:
 *   Which base cases distinguish equal absence from structural mismatch?
 *
 * Complexity target:
 *   Time: O(n)
 *   Space: O(h)
 */

import { TreeNode } from './structures';
export { TreeNode } from './structures';

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  // TODO: Return whether both trees have identical structure and values.
  throw new Error('Not implemented');
}
