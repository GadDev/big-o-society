import { describe, expect, it } from "vitest";
import { isAnagram } from "../../src/challenges/hash-map/03-valid-anagram";

describe("03 — Valid Anagram", () => {
	it.each([
		{ a: "anagram", b: "nagaram", expected: true },
		{ a: "rat", b: "car", expected: false },
		{ a: "", b: "", expected: true },
		{ a: "aacc", b: "ccac", expected: false },
	])("$a / $b -> $expected", ({ a, b, expected }) => {
		expect(isAnagram(a, b)).toBe(expected);
	});
});
