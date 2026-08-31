/**
 * Exercise 7 — Word Ladder
 * Difficulty: Medium | Mastery: L4 Adapt
 * Skill: BFS + pattern lookup
 *
 * Problem:
 *   Return the number of words in the shortest valid transformation sequence, or 0. Adjacent words differ by one letter.
 *
 * Goal: given a `beginWord`, an `endWord`, and a `wordList`, return the
 * length (number of words, including both ends) of the shortest sequence
 * of words from `beginWord` to `endWord` where each step changes exactly
 * one letter and every intermediate word must exist in `wordList`, or 0
 * if no such sequence exists.
 * Example: beginWord "hit", endWord "cog", wordList ["hot","dot","dog","lot","log","cog"] -> 5
 *          (hit -> hot -> dot -> dog -> cog);
 *          same begin/end but wordList missing "cog" -> 0 (end unreachable).
 *
 * Recognition trigger: fewest one-letter transformations -> words are graph states
 *
 * Before coding, say aloud:
 *   1. What clue points to Breadth-First Search (BFS)?
 *   2. What state/invariant must stay true after every move or recursive call?
 *
 * Critical explanation question:
 *   Why is the next choice/expansion/state transition safe, and what work does it eliminate?
 *
 * Complexity target:
 *   Time: O(N × L²)
 *   Space: O(N × L)
 */

export function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
  // TODO: Return the number of words in the shortest valid transformation sequence, or 0. Adjacent words differ by one letter.
  throw new Error('Not implemented');
}
