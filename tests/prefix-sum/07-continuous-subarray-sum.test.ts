import { describe, expect, it } from "vitest";
import { checkSubarraySum } from "../../src/challenges/prefix-sum/07-continuous-subarray-sum";

describe("07 — Continuous Subarray Sum", () => {
	it.each([
		{ nums: [23, 2, 4, 6, 7], k: 6, expected: true },
		{ nums: [23, 2, 6, 4, 7], k: 6, expected: true },
		{ nums: [23, 2, 6, 4, 7], k: 13, expected: false },
		{ nums: [0, 0], k: 5, expected: true },
	])("$nums / $k -> $expected", ({ nums, k, expected }) =>
		expect(checkSubarraySum(nums, k)).toBe(expected),
	);
});
