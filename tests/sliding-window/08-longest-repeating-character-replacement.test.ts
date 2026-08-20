import { describe, expect, it } from "vitest";
import { characterReplacement } from "../../src/challenges/sliding-window/08-longest-repeating-character-replacement";

describe("08 — Longest Repeating Character Replacement", () => {
	it.each([
		{ s: "ABAB", k: 2, expected: 4 },
		{ s: "AABABBA", k: 1, expected: 4 },
		{ s: "", k: 2, expected: 0 },
		{ s: "AAAA", k: 0, expected: 4 },
	])("$s / $k -> $expected", ({ s, k, expected }) =>
		expect(characterReplacement(s, k)).toBe(expected),
	);
});
