/**
 * Exercise 02 — Linked List Cycle
 * Difficulty: Easy | Mastery: L1→L2
 * Skill: Floyd cycle detection
 *
 * Goal: given the head of a linked list, return whether it contains a cycle
 * (some node's `next` points back to an earlier node), using O(1) space.
 * Example: 3 -> 2 -> 0 -> -4 -> (back to node 2) -> true;
 *          1 -> 2 -> 3 -> null -> false.
 *
 * Recognition trigger: cycle + O(1) memory -> fast eventually catches slow
 *
 * Before coding, say aloud:
 *   1. Why does this problem suggest Fast & Slow Pointers?
 *   2. What invariant/state will stay true while I scan or recurse?
 *
 * Critical explanation question:
 *   Why can fast never permanently stay ahead inside a finite cycle?
 *
 * Complexity target:
 *   Time: O(n)
 *   Space: O(1)
 */

import { ListNode } from './list-node';
export { ListNode } from './list-node';

export function hasCycle(head: ListNode | null): boolean {
  // TODO: Detect whether the linked list contains a cycle using O(1) extra space.
  throw new Error('Not implemented');
}
