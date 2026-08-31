/**
 * Exercise 01 — Valid Parentheses
 * Difficulty: Easy | Mastery: L1 Recognize
 * Skill: Basic LIFO matching
 *
 * Goal: given a string `s` containing only the brackets `()[]{}`, return
 * true if every bracket is closed in the correct order and every opener
 * has a matching closer.
 * Example: "()[]{}" -> true (each pair closes immediately);
 *          "(]" -> false (mismatched bracket types);
 *          "([)]" -> false (closed out of order, even though types balance).
 *
 * Recognition trigger: nested brackets -> latest opener must close first
 *
 * Before coding, say aloud:
 *   1. Why does this problem suggest Stack?
 *   2. What invariant/state will stay true while I scan or recurse?
 *
 * Critical explanation question:
 *   What exactly does the top of the stack represent?
 *
 * Complexity target:
 *   Time: O(n)
 *   Space: O(n)
 */

export function isValidParentheses(s: string): boolean {
  // TODO: Return true when every opening bracket is closed in the correct order.
  throw new Error('Not implemented');
}
