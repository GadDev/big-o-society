import { describe, expect, it } from "vitest";
import { minSubarrayLen } from "../../src/challenges/sliding-window/04-min-size-subarray-sum";

describe("04 — Minimum Size Subarray Sum", () => {
	it.each([
		{ target: 7, nums: [2, 3, 1, 2, 4, 3], expected: 2 },
		{ target: 4, nums: [1, 4, 4], expected: 1 },
		{ target: 11, nums: [1, 1, 1, 1, 1, 1, 1, 1], expected: 0 },
		{ target: 1, nums: [], expected: 0 },
	])("$target / $nums -> $expected", ({ target, nums, expected }) =>
		expect(minSubarrayLen(target, nums)).toBe(expected),
	);
});
