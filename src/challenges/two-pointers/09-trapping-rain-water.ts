/**
 * Exercise 09 — Trapping Rain Water
 * Difficulty: Hard | Mastery: Level 4 → 5
 *
 * Goal: given bar `heights`, return how many units of rain water are
 * trapped between the bars after rain.
 * Example: [0,1,0,2,1,0,1,3,2,1,2,1] -> 6;
 *          [4, 2, 0, 3, 2, 5] -> 9;
 *          [1, 2, 3, 4] -> 0 (strictly increasing, nothing is trapped).
 *
 * Given bar heights, return how many units of rain water are trapped after rain.
 *
 * Example:
 *   [0,1,0,2,1,0,1,3,2,1,2,1] -> 6
 *
 * Constraints:
 *   - O(n) time
 *   - O(1) auxiliary space
 *   - Do not precompute full prefix-max and suffix-max arrays.
 *
 * Invariant challenge:
 *   Track what is already guaranteed by the best wall seen from the left and
 *   the best wall seen from the right. Which side is safe to process next?
 */
export function trapRainWater(heights: number[]): number {
	// TODO: implement the O(1)-space two-pointer solution.
	throw new Error("Not implemented");
}
