/**
 * Exercise 09 — Maximum Twin Sum of a Linked List
 * Difficulty: Medium | Mastery: L4→L5
 * Skill: Middle + reverse + pair
 *
 * Goal: given the head of an even-length linked list, pair node i with node
 * (n-1-i) and return the maximum sum among all such twin pairs, using O(1)
 * extra space.
 * Example: 5 -> 4 -> 2 -> 1 -> null -> 6 (pairs (5,1)=6, (4,2)=6);
 *          4 -> 2 -> 2 -> 3 -> null -> 7 (pairs (4,3)=7, (2,2)=4);
 *          1 -> 100000 -> null -> 100001.
 *
 * Recognition trigger: twin positions become adjacent traversals after reversing half
 *
 * Before coding, say aloud:
 *   1. Why does this problem suggest Fast & Slow Pointers?
 *   2. What invariant/state will stay true while I scan or recurse?
 *
 * Critical explanation question:
 *   Why does reversing only the second half expose every twin pair?
 *
 * Complexity target:
 *   Time: O(n)
 *   Space: O(1)
 */

import { ListNode } from './list-node';
export { ListNode } from './list-node';

export function pairSum(head: ListNode | null): number {
  // TODO: For an even-length list, return the maximum twin sum using O(1) extra space.
  throw new Error('Not implemented');
}
