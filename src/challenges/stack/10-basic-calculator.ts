/**
 * Exercise 10 — Basic Calculator — Boss Fight
 * Difficulty: Hard | Mastery: L5 Combine
 * Skill: Stack + parsing state
 *
 * Goal: given a string `expression` with non-negative integers, `+`, `-`,
 * parentheses and spaces, evaluate it and return the integer result.
 * Example: "1 + 1" -> 2;
 *          "(1+(4+5+2)-3)+(6+8)" -> 23;
 *          "-(3+(4+5))" -> -12 (leading unary minus applied to the parenthesized group).
 *
 * Recognition trigger: nested parentheses + deferred signs -> stack saved context
 *
 * Before coding, say aloud:
 *   1. Why does this problem suggest Stack?
 *   2. What invariant/state will stay true while I scan or recurse?
 *
 * Critical explanation question:
 *   What minimal state must be saved before entering a parenthesized expression?
 *
 * Complexity target:
 *   Time: O(n)
 *   Space: O(n)
 */

export function calculate(expression: string): number {
  // TODO: Evaluate an expression containing non-negative integers, +, -, parentheses and spaces.
  throw new Error('Not implemented');
}
