import { describe, expect, it } from "vitest";
import { countRangeSum } from "../../src/challenges/prefix-sum/10-count-range-sum";

describe("10 — Count of Range Sum", () => {
	it.each([
		{ nums: [-2, 5, -1], lower: -2, upper: 2, expected: 3 },
		{ nums: [0], lower: 0, upper: 0, expected: 1 },
		{ nums: [], lower: -1, upper: 1, expected: 0 },
		{ nums: [1, -1], lower: 0, upper: 0, expected: 1 },
	])("$nums [$lower,$upper] -> $expected", ({ nums, lower, upper, expected }) =>
		expect(countRangeSum(nums, lower, upper)).toBe(expected),
	);
});
