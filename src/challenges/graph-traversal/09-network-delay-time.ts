/**
 * Exercise 9 — Network Delay Time
 * Difficulty: Medium | Mastery: L5 Combine
 * Skill: Dijkstra shortest paths
 *
 * Problem:
 *   times entries are [u,v,w]. Return time for signal from k to reach all 1-indexed nodes, or -1.
 *
 * Recognition trigger: weighted nonnegative edges -> repeatedly expand the cheapest known frontier
 *
 * Before coding, say aloud:
 *   1. What clue points to Graph Traversal?
 *   2. What state/invariant must stay true after every move or recursive call?
 *
 * Critical explanation question:
 *   Why is the next choice/expansion/state transition safe, and what work does it eliminate?
 *
 * Complexity target:
 *   Time: O((V + E) log V)
 *   Space: O(V + E)
 */

export function networkDelayTime(times: number[][], n: number, k: number): number {
  // TODO: times entries are [u,v,w]. Return time for signal from k to reach all 1-indexed nodes, or -1.
  throw new Error('Not implemented');
}
