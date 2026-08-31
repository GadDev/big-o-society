/**
 * Exercise 08 — Reveal Cards in Increasing Order
 * Difficulty: Medium | Mastery: L4 Adapt
 * Skill: Queue of positions
 *
 * Goal: return an ordering of `deck` such that repeatedly revealing the top
 * card and moving the new top card to the bottom (if any remain) reveals
 * cards in increasing order.
 * Example: [17,13,11,2,3,5,7] -> an arrangement that reveals [2,3,5,7,11,13,17];
 *          [1,1000] -> an arrangement that reveals [1,1000];
 *          [5] -> [5].
 *
 * Recognition trigger: simulate operations on indices instead of values
 *
 * Before coding, say aloud:
 *   1. Why does this problem suggest Queue / Deque?
 *   2. What invariant/state will stay true while I scan or recurse?
 *
 * Critical explanation question:
 *   Why is it easier to simulate where cards go than to reverse the reveal directly?
 *
 * Complexity target:
 *   Time: O(n log n)
 *   Space: O(n)
 */

export function deckRevealedIncreasing(deck: number[]): number[] {
  // TODO: Return an initial deck ordering whose reveal process produces cards in increasing order.
  throw new Error('Not implemented');
}
