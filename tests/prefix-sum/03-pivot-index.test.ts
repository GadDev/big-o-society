import { describe, expect, it } from "vitest";
import { pivotIndex } from "../../src/challenges/prefix-sum/03-pivot-index";

describe("03 — Find Pivot Index", () => {
	it.each([
		{ input: [1, 7, 3, 6, 5, 6], expected: 3 },
		{ input: [1, 2, 3], expected: -1 },
		{ input: [2, 1, -1], expected: 0 },
		{ input: [], expected: -1 },
	])("$input -> $expected", ({ input, expected }) =>
		expect(pivotIndex(input)).toBe(expected),
	);
});
