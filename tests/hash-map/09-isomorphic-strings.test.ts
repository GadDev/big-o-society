import { describe, expect, it } from "vitest";
import { isIsomorphic } from "../../src/challenges/hash-map/09-isomorphic-strings";

describe("09 — Isomorphic Strings", () => {
	it.each([
		{ s: "egg", t: "add", expected: true },
		{ s: "foo", t: "bar", expected: false },
		{ s: "paper", t: "title", expected: true },
		{ s: "badc", t: "baba", expected: false },
		{ s: "", t: "", expected: true },
	])("$s / $t -> $expected", ({ s, t, expected }) =>
		expect(isIsomorphic(s, t)).toBe(expected),
	);
});
