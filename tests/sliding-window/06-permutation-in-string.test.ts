import { describe, expect, it } from "vitest";
import { checkInclusion } from "../../src/challenges/sliding-window/06-permutation-in-string";

describe("06 — Permutation in String", () => {
	it.each([
		{ pattern: "ab", text: "eidbaooo", expected: true },
		{ pattern: "ab", text: "eidboaoo", expected: false },
		{ pattern: "adc", text: "dcda", expected: true },
		{ pattern: "", text: "anything", expected: true },
	])("$pattern / $text -> $expected", ({ pattern, text, expected }) =>
		expect(checkInclusion(pattern, text)).toBe(expected),
	);
});
