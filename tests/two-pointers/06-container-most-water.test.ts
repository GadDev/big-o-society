import { describe, expect, it } from "vitest";
import { maxArea } from "../../src/challenges/two-pointers/06-container-most-water";

describe("06 — Container With Most Water", () => {
	it.each([
		{ input: [1, 8, 6, 2, 5, 4, 8, 3, 7], expected: 49 },
		{ input: [1, 1], expected: 1 },
		{ input: [4, 3, 2, 1, 4], expected: 16 },
		{ input: [1, 2, 1], expected: 2 },
		{ input: [], expected: 0 },
		{ input: [5], expected: 0 },
	])("$input -> $expected", ({ input, expected }) => {
		expect(maxArea(input)).toBe(expected);
	});
});
