/**
 * Exercise 10 — Max Points on a Line — Boss Fight
 * Difficulty: Hard | Mastery: L5 Combine
 * Variant: Anchor + normalized slope map
 *
 * Goal: given an array of 2D `points`, return the maximum number of points
 * that lie on the same straight line.
 * Example: [[1,1],[2,2],[3,3]] -> 3 (all three lie on y = x);
 *          [[0,0],[0,1],[0,-1]] -> 3 (all three lie on the vertical line x = 0);
 *          [[2,3]] -> 1 (a single point trivially lies on a line).
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
