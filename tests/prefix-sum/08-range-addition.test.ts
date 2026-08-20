import { describe, expect, it } from "vitest";
import { applyRangeUpdates } from "../../src/challenges/prefix-sum/08-range-addition";

describe("08 — Range Addition with Difference Array", () => {
	it("applies overlapping range updates", () => {
		expect(
			applyRangeUpdates(5, [
				[1, 3, 2],
				[2, 4, 3],
				[0, 2, -2],
			]),
		).toEqual([-2, 0, 3, 5, 3]);
	});
	it("handles no updates", () =>
		expect(applyRangeUpdates(4, [])).toEqual([0, 0, 0, 0]));
	it("handles a full-range update", () =>
		expect(applyRangeUpdates(3, [[0, 2, 5]])).toEqual([5, 5, 5]));
});
