import { describe, expect, it } from "vitest";
import { maxVowels } from "../../src/challenges/sliding-window/05-max-vowels";

describe("05 — Maximum Vowels in a Substring", () => {
	it.each([
		{ s: "abciiidef", k: 3, expected: 3 },
		{ s: "aeiou", k: 2, expected: 2 },
		{ s: "leetcode", k: 3, expected: 2 },
		{ s: "rhythms", k: 4, expected: 0 },
	])("$s / $k -> $expected", ({ s, k, expected }) =>
		expect(maxVowels(s, k)).toBe(expected),
	);
});
