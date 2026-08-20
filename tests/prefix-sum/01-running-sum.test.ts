import { describe, expect, it } from "vitest";
import { runningSum } from "../../src/challenges/prefix-sum/01-running-sum";

describe("01 — Running Sum", () => {
	it.each([
		{ input: [1, 2, 3, 4], expected: [1, 3, 6, 10] },
		{ input: [1, 1, 1, 1, 1], expected: [1, 2, 3, 4, 5] },
		{ input: [], expected: [] },
		{ input: [-1, 2, -3], expected: [-1, 1, -2] },
	])("$input", ({ input, expected }) =>
		expect(runningSum(input)).toEqual(expected),
	);
});
