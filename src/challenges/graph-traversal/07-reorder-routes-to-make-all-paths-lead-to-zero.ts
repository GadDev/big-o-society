/**
 * Exercise 7 — Reorder Routes to Make All Paths Lead to Zero
 * Difficulty: Medium | Mastery: L4 Adapt
 * Skill: Traversal with edge metadata
 *
 * Problem:
 *   Directed roads form a tree. Return minimum roads to reverse so every city can reach city 0.
 *
 * Goal: given `n` cities and a list of directed `connections` that form a
 * tree, return the minimum number of roads to reverse so every city can
 * reach city 0.
 * Example: n=6, connections=[[0,1],[1,3],[2,3],[4,0],[4,5]] -> 3
 *          (edges 0->1, 1->3, 4->5 point away from 0 and must be reversed);
 *          n=3, connections=[[1,0],[2,0]] -> 0 (both roads already point
 *          toward city 0).
 *
 * Recognition trigger: traverse an undirected view while remembering which original edge direction needs reversal
 *
 * Before coding, say aloud:
 *   1. What clue points to Graph Traversal?
 *   2. What state/invariant must stay true after every move or recursive call?
 *
 * Critical explanation question:
 *   Why is the next choice/expansion/state transition safe, and what work does it eliminate?
 *
 * Complexity target:
 *   Time: O(V + E)
 *   Space: O(V + E)
 */

export function minReorder(n: number, connections: number[][]): number {
  // TODO: Directed roads form a tree. Return minimum roads to reverse so every city can reach city 0.
  throw new Error('Not implemented');
}
