import { describe, expect, it } from "vitest";
import { maxAverage } from "../../src/challenges/sliding-window/02-max-average-size-k";

describe("02 — Maximum Average Subarray", () => {
	it("finds the best average", () =>
		expect(maxAverage([1, 12, -5, -6, 50, 3], 4)).toBeCloseTo(12.75));
	it("handles one item", () => expect(maxAverage([5], 1)).toBe(5));
	it("handles negatives", () =>
		expect(maxAverage([-1, -2, -3], 2)).toBeCloseTo(-1.5));
	it("returns null when k is too large", () =>
		expect(maxAverage([1, 2], 3)).toBeNull());
});
