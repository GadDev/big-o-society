import { describe, expect, it } from "vitest";
import { findAnagrams } from "../../src/challenges/sliding-window/07-find-all-anagrams";

describe("07 — Find All Anagrams in a String", () => {
	it.each([
		{ text: "cbaebabacd", pattern: "abc", expected: [0, 6] },
		{ text: "abab", pattern: "ab", expected: [0, 1, 2] },
		{ text: "abc", pattern: "z", expected: [] },
	])("$text / $pattern", ({ text, pattern, expected }) =>
		expect(findAnagrams(text, pattern)).toEqual(expected),
	);
});
