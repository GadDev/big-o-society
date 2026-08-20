import { describe, expect, it } from "vitest";
import { firstUniqueChar } from "../../src/challenges/hash-map/04-first-unique-character";

describe("04 — First Unique Character", () => {
	it.each([
		{ input: "leetcode", expected: 0 },
		{ input: "loveleetcode", expected: 2 },
		{ input: "aabb", expected: -1 },
		{ input: "", expected: -1 },
	])("$input -> $expected", ({ input, expected }) => {
		expect(firstUniqueChar(input)).toBe(expected);
	});
});
