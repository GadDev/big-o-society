/**
 * Exercise 09 — 2D Region Sum Matrix
 * Difficulty: Medium | Mastery: L4→L5
 * Variant: 2D prefix sum
 *
 * Goal: given a 2D `matrix`, build a structure that answers inclusive
 * rectangle-sum queries `sumRegion(row1, col1, row2, col2)` in O(1).
 * Example: new NumMatrix([[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]);
 *          sumRegion(2, 1, 4, 3) -> 8;
 *          sumRegion(1, 1, 2, 2) -> 11.
 *
 * Recognition trigger: rectangle sum -> inclusion/exclusion of four prefixes
 *
 * Before coding, say aloud:
 *   1. What clue points to Prefix Sum?
 *   2. What state/history must remain true while I scan?
 *
 * Critical explanation question:
 *   Which overlapping areas get subtracted twice, and which corner must be added back?
 *
 * Complexity target:
 *   Time: Build O(rows·cols), query O(1)
 *   Space: O(rows·cols)
 */

export class NumMatrix {
	constructor(matrix: number[][]) {
		// TODO: precompute a 2D prefix-sum table.
		void matrix;
		throw new Error("Not implemented");
	}

	sumRegion(row1: number, col1: number, row2: number, col2: number): number {
		// TODO: inclusive rectangle query in O(1).
		void row1;
		void col1;
		void row2;
		void col2;
		throw new Error("Not implemented");
	}
}
