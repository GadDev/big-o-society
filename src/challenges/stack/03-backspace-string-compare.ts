/**
 * Exercise 03 — Backspace String Compare
 * Difficulty: Easy | Mastery: L2 Implement
 * Skill: Stack simulation
 *
 * Goal: given two strings `s` and `t` where `#` means "delete the previous
 * character" (a backspace), return true if applying all backspaces makes
 * the two final strings equal.
 * Example: "ab#c" and "ad#c" -> true (both reduce to "ac");
 *          "ab##" and "c#d#" -> true (both reduce to "");
 *          "a#c" and "b" -> false ("a#c" reduces to "c", not "b").
 *
 * Recognition trigger: backspace/undo behavior -> stack
 *
 * Before coding, say aloud:
 *   1. Why does this problem suggest Stack?
 *   2. What invariant/state will stay true while I scan or recurse?
 *
 * Critical explanation question:
 *   What does a backspace do to the most recent surviving character?
 *
 * Complexity target:
 *   Time: O(n + m)
 *   Space: O(n + m)
 */

export function backspaceCompare(s: string, t: string): boolean {
  // TODO: Treat # as backspace and compare the final texts.
  throw new Error('Not implemented');
}
