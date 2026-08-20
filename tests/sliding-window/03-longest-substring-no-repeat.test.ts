import { describe, expect, it } from "vitest";
import { lengthOfLongestSubstring } from "../../src/challenges/sliding-window/03-longest-substring-no-repeat";

describe("03 — Longest Substring Without Repeating Characters", () => {
	it.each([
		{ input: "abcabcbb", expected: 3 },
		{ input: "bbbbb", expected: 1 },
		{ input: "pwwkew", expected: 3 },
		{ input: "", expected: 0 },
		{ input: "abba", expected: 2 },
	])("$input -> $expected", ({ input, expected }) =>
		expect(lengthOfLongestSubstring(input)).toBe(expected),
	);
});
