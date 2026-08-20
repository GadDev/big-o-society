import { describe, expect, it } from "vitest";
import { moveZeroes } from "../../src/challenges/two-pointers/04-move-zeroes";

describe("04 — Move Zeroes", () => {
	it.each([
		{ input: [0, 1, 0, 3, 12], expected: [1, 3, 12, 0, 0] },
		{ input: [0], expected: [0] },
		{ input: [1, 2, 3], expected: [1, 2, 3] },
		{ input: [0, 0, 0], expected: [0, 0, 0] },
		{ input: [4, 0, -2, 0, 7, 0, 1], expected: [4, -2, 7, 1, 0, 0, 0] },
	])("$input -> $expected", ({ input, expected }) => {
		const nums = [...input];
		expect(moveZeroes(nums)).toBeUndefined();
		expect(nums).toEqual(expected);
	});
});
