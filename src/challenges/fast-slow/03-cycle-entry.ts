/**
 * Exercise 03 — Linked List Cycle II
 * Difficulty: Medium | Mastery: L2 Implement
 * Skill: Find cycle entry
 *
 * Goal: given the head of a linked list, return the node where a cycle
 * begins, or null if there is no cycle.
 * Example: 3 -> 2 -> 0 -> -4 -> (back to node 2) -> returns node 2;
 *          1 -> 2 -> null -> returns null.
 *
 * Recognition trigger: meeting point exists; reset one pointer to head
 *
 * Before coding, say aloud:
 *   1. Why does this problem suggest Fast & Slow Pointers?
 *   2. What invariant/state will stay true while I scan or recurse?
 *
 * Critical explanation question:
 *   Why does moving both one step after the meeting lead to the cycle entry?
 *
 * Complexity target:
 *   Time: O(n)
 *   Space: O(1)
 */

import { ListNode } from './list-node';
export { ListNode } from './list-node';

export function detectCycle(head: ListNode | null): ListNode | null {
  // TODO: Return the exact node where the cycle begins, or null.
  throw new Error('Not implemented');
}
