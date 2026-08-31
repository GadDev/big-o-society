/**
 * Exercise 05 — Time Needed to Buy Tickets
 * Difficulty: Medium | Mastery: L3 Explain
 * Skill: Queue simulation reasoning
 *
 * Goal: given `tickets[i]` tickets needed by person i standing in a circular
 * queue (each buys 1 ticket per turn then moves to the back unless done),
 * return the number of seconds until person `k` has bought all their tickets.
 * Example: tickets = [2,3,2], k = 2 -> 6;
 *          tickets = [5,1,1,1], k = 0 -> 8;
 *          tickets = [1], k = 0 -> 1.
 *
 * Recognition trigger: round-robin service in arrival order
 *
 * Before coding, say aloud:
 *   1. Why does this problem suggest Queue / Deque?
 *   2. What invariant/state will stay true while I scan or recurse?
 *
 * Critical explanation question:
 *   Can you simulate without physically rotating an array every step?
 *
 * Complexity target:
 *   Time: O(total tickets) target
 *   Space: O(n)
 */

export function timeRequiredToBuy(tickets: number[], k: number): number {
  // TODO: Simulate the ticket queue and return seconds until person k finishes.
  throw new Error('Not implemented');
}
