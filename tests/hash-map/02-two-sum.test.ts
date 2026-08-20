import { describe, expect, it } from "vitest";
import { twoSum } from "../../src/challenges/hash-map/02-two-sum";

describe("02 — Two Sum", () => {
	it("finds the classic pair", () =>
		expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]));
	it("handles a later complement", () =>
		expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]));
	it("can use two equal values at different indices", () =>
		expect(twoSum([3, 3], 6)).toEqual([0, 1]));
	it("returns null when no pair exists", () =>
		expect(twoSum([1, 2, 3], 99)).toBeNull());
});
