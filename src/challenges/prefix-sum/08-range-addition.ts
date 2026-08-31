/**
 * Exercise 08 — Range Addition with Difference Array
 * Difficulty: Medium | Mastery: L4 Adapt
 * Variant: Difference array → prefix reconstruction
 *
 * Goal: given an array length `length` starting at all zeros and a list of
 * inclusive range updates `[start, end, delta]`, apply every update and
 * return the resulting array.
 * Example: length = 5, updates = [[1,3,2],[2,4,3],[0,2,-2]] -> [-2,0,3,5,3];
 *          length = 4, updates = [] -> [0,0,0,0];
 *          length = 3, updates = [[0,2,5]] -> [5,5,5].
 *
 * Recognition trigger: many range updates -> mark boundaries, prefix once
 *
 * Before coding, say aloud:
 *   1. What clue points to Prefix Sum?
 *   2. What state/history must remain true while I scan?
 *
 * Critical explanation question:
 *   How is a difference array the “inverse idea” of a prefix sum?
 *
 * Complexity target:
 *   Time: O(n + u)
 *   Space: O(n)
 */

export type RangeUpdate = [start: number, end: number, delta: number];

export function applyRangeUpdates(
	length: number,
	updates: RangeUpdate[],
): number[] {
	// TODO: start with zeros and apply every inclusive range increment efficiently.
	throw new Error("Not implemented");
}
