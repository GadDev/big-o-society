import { describe, expect, it } from "vitest";
import { largestAltitude } from "../../src/challenges/prefix-sum/04-largest-altitude";

describe("04 — Find the Highest Altitude", () => {
	it.each([
		{ input: [-5, 1, 5, 0, -7], expected: 1 },
		{ input: [-4, -3, -2, -1, 4, 3, 2], expected: 0 },
		{ input: [], expected: 0 },
		{ input: [5, -2], expected: 5 },
	])("$input -> $expected", ({ input, expected }) =>
		expect(largestAltitude(input)).toBe(expected),
	);
});
