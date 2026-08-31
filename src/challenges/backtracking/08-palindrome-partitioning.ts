/**
 * Exercise 8 — Palindrome Partitioning
 * Difficulty: Medium | Mastery: L4 Adapt
 * Skill: Backtracking + validation
 *
 * Problem:
 *   Return all partitions of s where every substring in a partition is a palindrome.
 *
 * Goal: given a string `s`, return all ways to partition it into substrings
 * such that every substring in the partition is a palindrome.
 * Example: "aab" -> [["a","a","b"],["aa","b"]];
 *          "z" -> [["z"]] (a single character is its own palindrome partition).
 *
 * Recognition trigger: split a string at many positions but only continue with valid palindrome pieces
 *
 * Before coding, say aloud:
 *   1. What clue points to Backtracking?
 *   2. What state/invariant must stay true after every move or recursive call?
 *
 * Critical explanation question:
 *   Why is the next choice/expansion/state transition safe, and what work does it eliminate?
 *
 * Complexity target:
 *   Time: Exponential
 *   Space: O(n) recursion excluding output
 */

export function partitionPalindromes(s: string): string[][] {
  // TODO: Return all partitions of s where every substring in a partition is a palindrome.
  throw new Error('Not implemented');
}
