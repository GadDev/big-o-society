import { describe, expect, it } from "vitest";
import { longestConsecutive } from "../../src/challenges/hash-map/07-longest-consecutive-sequence";

describe("07 — Longest Consecutive Sequence", () => {
	it.each([
		{ input: [100, 4, 200, 1, 3, 2], expected: 4 },
		{ input: [0, 3, 7, 2, 5, 8, 4, 6, 0, 1], expected: 9 },
		{ input: [], expected: 0 },
		{ input: [1, 2, 0, 1], expected: 3 },
	])("$input -> $expected", ({ input, expected }) =>
		expect(longestConsecutive(input)).toBe(expected),
	);
});
