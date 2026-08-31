/**
 * Exercise 7 — Partition Labels
 * Difficulty: Medium | Mastery: L4 Adapt
 * Skill: Last occurrence frontier
 *
 * Problem:
 *   Partition s into as many parts as possible so each letter appears in at most one part. Return part lengths.
 *
 * Goal: extend the current partition's boundary to the last occurrence of
 * every character seen so far, closing it only once the boundary is reached.
 * Example: "ababcbacadefegdehijhklij" -> [9,7,8] (three partitions of lengths 9, 7, and 8);
 *          "eccbbbbdec" -> [10] (every letter's last occurrence forces one single partition).
 *
 * Recognition trigger: close a segment only when every character seen so far ends inside it
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
 *   Space: O(1) alphabet-sized state
 */

export function partitionLabels(s: string): number[] {
  // TODO: Partition s into as many parts as possible so each letter appears in at most one part. Return part lengths.
  throw new Error('Not implemented');
}
