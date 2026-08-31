/**
 * Exercise 01 — Maximum Depth of Binary Tree
 * Difficulty: Easy | Mastery: L1 Recognize
 * Skill: Recursive tree DFS
 *
 * Goal: given the root of a binary tree, return the number of nodes on the
 * longest root-to-leaf path (an empty tree has depth 0).
 * Example: tree [3,[9],[20,[15],[7]]] -> 3 (root -> 20 -> 15/7);
 *          null -> 0 (empty tree);
 *          tree [1,null,[2]] -> 2 (a single right-leaning chain).
 *
 * Recognition trigger: tree height -> depth of children + 1
 *
 * Before coding, say aloud:
 *   1. Why does this problem suggest Depth-First Search (DFS)?
 *   2. What invariant/state will stay true while I scan or recurse?
 *
 * Critical explanation question:
 *   What should an empty subtree return?
 *
 * Complexity target:
 *   Time: O(n)
 *   Space: O(h)
 */

import { TreeNode } from './structures';
export { TreeNode } from './structures';

export function maxDepth(root: TreeNode | null): number {
  // TODO: Return the maximum number of nodes on a root-to-leaf path.
  throw new Error('Not implemented');
}
