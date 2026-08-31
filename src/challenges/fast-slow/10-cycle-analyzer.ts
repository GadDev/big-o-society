/**
 * Exercise 10 — Cycle Analyzer — Boss Fight
 * Difficulty: Hard | Mastery: L5 Combine
 * Skill: Floyd + cycle metrics
 *
 * Goal: given the head of a linked list, return an analysis of whether it
 * has a cycle, and if so, the entry node, the cycle's length, and the
 * number of nodes before the entry (tail length).
 * Example: 1 -> 2 -> 3 -> null -> { hasCycle: false, entry: null, cycleLength: 0, tailLength: 0 };
 *          10 -> 20 -> 30 -> 40 -> 50 -> (back to node 30) -> { hasCycle: true, entry: node 30, cycleLength: 3, tailLength: 2 };
 *          1 -> 2 -> 3 -> (back to node 1) -> { hasCycle: true, entry: node 1, cycleLength: 3, tailLength: 0 }.
 *
 * Recognition trigger: detect cycle, locate entry, measure loop and tail
 *
 * Before coding, say aloud:
 *   1. Why does this problem suggest Fast & Slow Pointers?
 *   2. What invariant/state will stay true while I scan or recurse?
 *
 * Critical explanation question:
 *   Once you know the entry, how can you measure cycle length and tail length without a map?
 *
 * Complexity target:
 *   Time: O(n)
 *   Space: O(1)
 */

import { ListNode } from './list-node';
export { ListNode } from './list-node';

export type CycleAnalysis = { hasCycle: boolean; entry: ListNode | null; cycleLength: number; tailLength: number };
export function analyzeCycle(head: ListNode | null): CycleAnalysis {
  // TODO: Detect a cycle and, if present, return its entry node, cycle length and number of nodes before the entry.
  void head;
  throw new Error('Not implemented');
}
