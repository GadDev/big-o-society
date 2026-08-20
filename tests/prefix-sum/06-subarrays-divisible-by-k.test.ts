import { describe, expect, it } from "vitest";
import { subarraysDivByK } from "../../src/challenges/prefix-sum/06-subarrays-divisible-by-k";

describe("06 — Subarrays Divisible by K", () => {
	it.each([
		{ nums: [4, 5, 0, -2, -3, 1], k: 5, expected: 7 },
		{ nums: [5], k: 9, expected: 0 },
		{ nums: [0, 0], k: 3, expected: 3 },
	])("$nums / $k -> $expected", ({ nums, k, expected }) =>
		expect(subarraysDivByK(nums, k)).toBe(expected),
	);
});
