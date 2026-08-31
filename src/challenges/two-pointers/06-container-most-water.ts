/**
 * Exercise 06 — Container With Most Water
 * Difficulty: Medium | Mastery: Level 3 — Explain
 *
 * Goal: given `heights` where each number is the height of a vertical line,
 * pick two lines that, together with the x-axis, hold the maximum water and
 * return that area.
 * Example: [1, 8, 6, 2, 5, 4, 8, 3, 7] -> 49 (lines at index 1 and 8);
 *          [4, 3, 2, 1, 4] -> 16 (lines at index 0 and 4);
 *          [1, 1] -> 1 (only one pair available).
 *
 * Each number is the height of a vertical line. Pick two lines that, together
 * with the x-axis, hold the maximum amount of water.
 *
 * Example:
 *   [1, 8, 6, 2, 5, 4, 8, 3, 7] -> 49
 *
 * Constraints:
 *   - O(n) time
 *   - O(1) auxiliary space
 *
 * Critical explanation question:
 *   After calculating an area, why is moving the taller line inward never more
 *   promising than moving the shorter line?
 */
export function maxArea(heights: number[]): number {
	// TODO: implement using two pointers from opposite ends.
	throw new Error("Not implemented");
}
