import { describe, expect, it } from "vitest";
import { groupAnagrams } from "../../src/challenges/hash-map/05-group-anagrams";

const normalize = (groups: string[][]) =>
	groups
		.map((g) => [...g].sort())
		.sort((a, b) => a.join("|").localeCompare(b.join("|")));

describe("05 — Group Anagrams", () => {
	it("groups words by anagram signature", () => {
		expect(
			normalize(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])),
		).toEqual(normalize([["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]));
	});
	it("handles empty input", () => expect(groupAnagrams([])).toEqual([]));
	it("groups empty strings", () =>
		expect(groupAnagrams(["", ""])).toEqual([["", ""]]));
});
