import { describe, expect, it } from "vitest";
import { pairSumSorted } from "../../src/challenges/two-pointers/02-pair-sum-sorted";

describe("02 — Pair Sum in a Sorted Array", () => {
	it("finds a pair in the middle", () => {
		expect(pairSumSorted([1, 2, 4, 6, 10], 8)).toEqual([1, 3]);
	});

	it("can use the first and last values", () => {
		expect(pairSumSorted([-5, -1, 0, 4, 9], 4)).toEqual([0, 4]);
	});

	it("handles duplicate values at different indices", () => {
		expect(pairSumSorted([1, 2, 2, 3], 4)).toEqual([0, 3]);
	});

	it("returns null when no pair exists", () => {
		expect(pairSumSorted([1, 3, 5, 7], 20)).toBeNull();
	});

	it("returns null for fewer than two values", () => {
		expect(pairSumSorted([], 1)).toBeNull();
		expect(pairSumSorted([7], 14)).toBeNull();
	});
});
