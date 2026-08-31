/**
 * Exercise 04 — Find the Highest Altitude
 * Difficulty: Easy | Mastery: L2→L3
 * Variant: Prefix accumulation
 *
 * Goal: starting at altitude 0, apply each element of `gain` as the altitude
 * change for the next step, and return the highest altitude reached.
 * Example: [-5,1,5,0,-7] -> 1 (altitudes 0,-5,-4,1,1,-6, max is 1);
 *          [-4,-3,-2,-1,4,3,2] -> 0 (altitude never rises above the start);
 *          [5,-2] -> 5 (altitudes 0,5,3, max is 5).
 *
 * Recognition trigger: changes/deltas -> reconstruct cumulative state
 *
 * Before coding, say aloud:
 *   1. What clue points to Prefix Sum?
 *   2. What state/history must remain true while I scan?
 *
 * Critical explanation question:
 *   Why are “changes between states” a strong clue for cumulative/prefix thinking?
 *
 * Complexity target:
 *   Time: O(n)
 *   Space: O(1)
 */

export function largestAltitude(gain: number[]): number {
	// Start at altitude 0. gain[i] is the altitude change for the next step.
	// TODO: return the highest altitude reached.
	throw new Error("Not implemented");
}
