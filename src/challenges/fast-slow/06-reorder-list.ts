/**
 * Exercise 06 — Reorder List
 * Difficulty: Medium | Mastery: L3→L4
 * Skill: Middle + reverse + merge
 *
 * Goal: given the head of a linked list, reorder it in place from
 * L0->L1->...->Ln into L0->Ln->L1->Ln-1->L2->Ln-2->...
 * Example: 1 -> 2 -> 3 -> 4 -> null becomes 1 -> 4 -> 2 -> 3 -> null;
 *          1 -> 2 -> 3 -> 4 -> 5 -> null becomes 1 -> 5 -> 2 -> 4 -> 3 -> null;
 *          1 -> null stays 1 -> null.
 *
 * Recognition trigger: find middle, reverse second half, weave halves
 *
 * Before coding, say aloud:
 *   1. Why does this problem suggest Fast & Slow Pointers?
 *   2. What invariant/state will stay true while I scan or recurse?
 *
 * Critical explanation question:
 *   What pointer must be saved before rewiring each link?
 *
 * Complexity target:
 *   Time: O(n)
 *   Space: O(1)
 */

import { ListNode } from './list-node';
export { ListNode } from './list-node';

export function reorderList(head: ListNode | null): void {
  // TODO: Reorder L0→L1→...→Ln into L0→Ln→L1→Ln-1... in place.
  void head;
  throw new Error('Not implemented');
}
