import { describe, expect, it } from "vitest";
import { sortedSquares } from "../../src/challenges/two-pointers/05-sorted-squares";

describe("05 — Squares of a Sorted Array", () => {
	it.each([
		{ input: [-4, -1, 0, 3, 10], expected: [0, 1, 9, 16, 100] },
		{ input: [-7, -3, 2, 3, 11], expected: [4, 9, 9, 49, 121] },
		{ input: [-5, -4, -1], expected: [1, 16, 25] },
		{ input: [0, 2, 8], expected: [0, 4, 64] },
		{ input: [], expected: [] },
	])("$input -> $expected", ({ input, expected }) => {
		expect(sortedSquares(input)).toEqual(expected);
	});
});
