/**
 * Exercise 5 — Gas Station
 * Difficulty: Medium | Mastery: L3 Explain
 * Skill: Reset impossible prefixes
 *
 * Problem:
 *   Return a starting station index that completes the circular route, or -1.
 *
 * Goal: find the single starting station from which the running fuel
 * balance (gas[i] - cost[i]) never goes negative around the whole circuit.
 * Example: gas [1,2,3,4,5], cost [3,4,5,1,2] -> 3 (starting at station 3 never runs dry);
 *          gas [2,3,4], cost [3,4,3] -> -1 (total cost exceeds total gas, no start works).
 *
 * Recognition trigger: if a prefix goes negative, no start inside that failed prefix can work
 *
 * Before coding, say aloud:
 *   1. What clue points to Greedy?
 *   2. What state/invariant must stay true after every move or recursive call?
 *
 * Critical explanation question:
 *   Why is the next choice/expansion/state transition safe, and what work does it eliminate?
 *
 * Complexity target:
 *   Time: O(n)
 *   Space: O(1)
 */

export function canCompleteCircuit(gas: number[], cost: number[]): number {
  // TODO: Return a starting station index that completes the circular route, or -1.
  throw new Error('Not implemented');
}
