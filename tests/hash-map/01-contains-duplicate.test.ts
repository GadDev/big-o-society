import { describe, expect, it } from "vitest";
import { containsDuplicate } from "../../src/challenges/hash-map/01-contains-duplicate";

describe("01 — Contains Duplicate", () => {
	it.each([
		{ input: [1, 2, 3, 1], expected: true },
		{ input: [1, 2, 3, 4], expected: false },
		{ input: [], expected: false },
		{ input: [7], expected: false },
		{ input: [-1, -1], expected: true },
	])("$input -> $expected", ({ input, expected }) => {
		expect(containsDuplicate(input)).toBe(expected);
	});
});
