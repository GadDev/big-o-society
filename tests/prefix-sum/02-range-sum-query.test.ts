import { describe, expect, it } from "vitest";
import {
	buildPrefixSums,
	rangeSum,
} from "../../src/challenges/prefix-sum/02-range-sum-query";

describe("02 — Range Sum Query", () => {
	it("answers multiple ranges from one prefix array", () => {
		const prefix = buildPrefixSums([-2, 0, 3, -5, 2, -1]);
		expect(rangeSum(prefix, 0, 2)).toBe(1);
		expect(rangeSum(prefix, 2, 5)).toBe(-1);
		expect(rangeSum(prefix, 0, 5)).toBe(-3);
	});
	it("handles a single-item range", () => {
		const prefix = buildPrefixSums([7, 8]);
		expect(rangeSum(prefix, 1, 1)).toBe(8);
	});
});
