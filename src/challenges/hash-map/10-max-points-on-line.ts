/**
 * Exercise 10 — Max Points on a Line — Boss Fight
 * Difficulty: Hard | Mastery: L5 Combine
 * Variant: Anchor + normalized slope map
 *
 * Recognition trigger: same anchor + same normalized slope -> same line
 *
 * Before coding, say aloud:
 *   1. What clue points to Hash Map?
 *   2. What state/history must remain true while I scan?
 *
 * Critical explanation question:
 *   How will you normalize slopes so 1/2, 2/4, and -1/-2 become exactly the same key?
 *
 * Complexity target:
 *   Time: O(n²)
 *   Space: O(n) per anchor
 */

export type Point = [number, number];

export function maxPoints(points: Point[]): number {
	// TODO: return the maximum number of points lying on the same straight line.
	// Hint: choose an anchor and count normalized slopes to every later point.
	throw new Error("Not implemented");
}
