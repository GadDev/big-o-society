import { describe, expect, it } from "vitest";
import { NumMatrix } from "../../src/challenges/prefix-sum/09-2d-region-sum";

describe("09 — 2D Region Sum Matrix", () => {
	it("answers rectangle queries", () => {
		const matrix = new NumMatrix([
			[3, 0, 1, 4, 2],
			[5, 6, 3, 2, 1],
			[1, 2, 0, 1, 5],
			[4, 1, 0, 1, 7],
			[1, 0, 3, 0, 5],
		]);
		expect(matrix.sumRegion(2, 1, 4, 3)).toBe(8);
		expect(matrix.sumRegion(1, 1, 2, 2)).toBe(11);
		expect(matrix.sumRegion(1, 2, 2, 4)).toBe(12);
	});
});
