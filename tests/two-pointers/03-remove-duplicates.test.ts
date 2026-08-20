import { describe, expect, it } from "vitest";
import { removeDuplicates } from "../../src/challenges/two-pointers/03-remove-duplicates";

describe("03 — Remove Duplicates In Place", () => {
	it.each([
		{ input: [1, 1, 2], expected: [1, 2] },
		{ input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4], expected: [0, 1, 2, 3, 4] },
		{ input: [1, 2, 3], expected: [1, 2, 3] },
		{ input: [5, 5, 5, 5], expected: [5] },
		{ input: [], expected: [] },
	])("$input -> $expected", ({ input, expected }) => {
		const nums = [...input];
		const k = removeDuplicates(nums);
		expect(k).toBe(expected.length);
		expect(nums.slice(0, k)).toEqual(expected);
	});
});
