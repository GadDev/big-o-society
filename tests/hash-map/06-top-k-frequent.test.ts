import { describe, expect, it } from "vitest";
import { topKFrequent } from "../../src/challenges/hash-map/06-top-k-frequent";

const sorted = (xs: number[]) => [...xs].sort((a, b) => a - b);

describe("06 — Top K Frequent Elements", () => {
	it("returns the two most common values", () =>
		expect(sorted(topKFrequent([1, 1, 1, 2, 2, 3], 2))).toEqual([1, 2]));
	it("handles one element", () => expect(topKFrequent([1], 1)).toEqual([1]));
	it("handles negatives", () =>
		expect(sorted(topKFrequent([-1, -1, 2, 2, 2, 3], 2))).toEqual([-1, 2]));
});
