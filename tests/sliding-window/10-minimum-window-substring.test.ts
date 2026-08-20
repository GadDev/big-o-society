import { describe, expect, it } from "vitest";
import { minWindow } from "../../src/challenges/sliding-window/10-minimum-window-substring";

describe("10 — Minimum Window Substring", () => {
	it.each([
		{ s: "ADOBECODEBANC", t: "ABC", expected: "BANC" },
		{ s: "a", t: "a", expected: "a" },
		{ s: "a", t: "aa", expected: "" },
		{ s: "aa", t: "aa", expected: "aa" },
		{ s: "", t: "A", expected: "" },
	])("$s / $t -> $expected", ({ s, t, expected }) =>
		expect(minWindow(s, t)).toBe(expected),
	);
});
