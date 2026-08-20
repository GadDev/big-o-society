import { describe, expect, it } from "vitest";
import { trapRainWater } from "../../src/challenges/two-pointers/09-trapping-rain-water";

describe("09 — Trapping Rain Water", () => {
	it.each([
		{ input: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], expected: 6 },
		{ input: [4, 2, 0, 3, 2, 5], expected: 9 },
		{ input: [3, 0, 3], expected: 3 },
		{ input: [1, 2, 3, 4], expected: 0 },
		{ input: [4, 3, 2, 1], expected: 0 },
		{ input: [], expected: 0 },
	])("$input -> $expected", ({ input, expected }) => {
		expect(trapRainWater(input)).toBe(expected);
	});
});
