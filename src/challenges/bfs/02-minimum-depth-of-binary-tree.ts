import { TreeNode } from './structures';

/**
 * Exercise 2 — Minimum Depth of Binary Tree
 * Difficulty: Easy | Mastery: L1→L2
 * Skill: Early-exit BFS
 *
 * Problem:
 *   Return the number of nodes on the shortest root-to-leaf path.
 *
 * Goal: given the root of a binary tree, return the number of nodes along
 * the shortest path from root to any leaf (a node with no children).
 * Example: tree 3(9, 20(15, 7)) -> 2 (root -> 9 is the shortest leaf path);
 *          tree 1(null, 2(null, 3)) -> 3 (must descend right twice to leaf 3);
 *          null root -> 0.
 *
 * Recognition trigger: need nearest leaf -> first leaf reached by BFS is optimal
 *
 * Before coding, say aloud:
 *   1. What clue points to Breadth-First Search (BFS)?
 *   2. What state/invariant must stay true after every move or recursive call?
 *
 * Critical explanation question:
 *   Why is the next choice/expansion/state transition safe, and what work does it eliminate?
 *
 * Complexity target:
 *   Time: O(n)
 *   Space: O(w)
 */

export function minDepth(root: TreeNode | null): number {
  // TODO: Return the number of nodes on the shortest root-to-leaf path.
  throw new Error('Not implemented');
}
