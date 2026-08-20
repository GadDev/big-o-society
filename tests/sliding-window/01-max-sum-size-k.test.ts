import { describe, expect, it } from "vitest";
import { maxSumSizeK } from "../../src/challenges/sliding-window/01-max-sum-size-k";

describe("01 — Maximum Sum Subarray of Size K", () => {
	it.each([
		{ nums: [2, 1, 5, 1, 3, 2], k: 3, expected: 9 },
		{ nums: [2, 3, 4, 1, 5], k: 2, expected: 7 },
		{ nums: [-4, -2, -7], k: 2, expected: -6 },
		{ nums: [1, 2], k: 3, expected: null },
	])("$nums / $k -> $expected", ({ nums, k, expected }) =>
		expect(maxSumSizeK(nums, k)).toBe(expected),
	);
});
