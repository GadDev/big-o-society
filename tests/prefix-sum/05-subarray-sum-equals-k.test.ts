import { describe, expect, it } from "vitest";
import { subarraySum } from "../../src/challenges/prefix-sum/05-subarray-sum-equals-k";

describe("05 — Subarray Sum Equals K", () => {
	it.each([
		{ nums: [1, 1, 1], k: 2, expected: 2 },
		{ nums: [1, 2, 3], k: 3, expected: 2 },
		{ nums: [1, -1, 0], k: 0, expected: 3 },
		{ nums: [], k: 0, expected: 0 },
	])("$nums / $k -> $expected", ({ nums, k, expected }) =>
		expect(subarraySum(nums, k)).toBe(expected),
	);
});
