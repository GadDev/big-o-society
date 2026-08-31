/**
 * Exercise 05 — Palindrome Linked List
 * Difficulty: Medium | Mastery: L3 Explain
 * Skill: Middle + reverse + compare
 *
 * Goal: given the head of a linked list, return whether the sequence of
 * values reads the same forward and backward, using O(1) extra space.
 * Example: 1 -> 2 -> 2 -> 1 -> null -> true;
 *          1 -> 2 -> null -> false;
 *          1 -> 2 -> 3 -> 2 -> 1 -> null -> true.
 *
 * Recognition trigger: split at middle, reverse second half, compare halves
 *
 * Before coding, say aloud:
 *   1. Why does this problem suggest Fast & Slow Pointers?
 *   2. What invariant/state will stay true while I scan or recurse?
 *
 * Critical explanation question:
 *   Why do you not need an extra array to compare mirrored values?
 *
 * Complexity target:
 *   Time: O(n)
 *   Space: O(1)
 */

import { ListNode } from './list-node';
export { ListNode } from './list-node';

export function isPalindromeList(head: ListNode | null): boolean {
  // TODO: Return whether the linked-list values read the same forward and backward using O(1) extra space.
  throw new Error('Not implemented');
}
