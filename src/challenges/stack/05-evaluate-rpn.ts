/**
 * Exercise 05 — Evaluate Reverse Polish Notation
 * Difficulty: Medium | Mastery: L3 Explain
 * Skill: Operand stack
 *
 * Goal: given `tokens`, a valid Reverse Polish Notation expression, evaluate
 * it and return the integer result (division truncates toward zero).
 * Example: ["2","1","+","3","*"] -> 9 ((2 + 1) * 3);
 *          ["4","13","5","/","+"] -> 6 (4 + (13 / 5), truncated to 2);
 *          ["10","6","9","3","+","-11","*","/","*","17","+","5","+"] -> 22.
 *
 * Recognition trigger: operator appears after its operands -> pop the latest two
 *
 * Before coding, say aloud:
 *   1. Why does this problem suggest Stack?
 *   2. What invariant/state will stay true while I scan or recurse?
 *
 * Critical explanation question:
 *   Why does operand order matter for subtraction and division?
 *
 * Complexity target:
 *   Time: O(n)
 *   Space: O(n)
 */

export function evalRPN(tokens: string[]): number {
  // TODO: Evaluate a valid Reverse Polish Notation expression using integer truncation toward zero.
  throw new Error('Not implemented');
}
