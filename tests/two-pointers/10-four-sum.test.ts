import { describe, expect, it } from "vitest";
import { fourSum } from "../../src/challenges/two-pointers/10-four-sum";

function normalize(rows: number[][]): string[] {
	return rows.map((row) => [...row].sort((a, b) => a - b).join(",")).sort();
}

describe("10 — Four Sum — Boss Fight", () => {
	it.each([
		{
			input: [1, 0, -1, 0, -2, 2],
			target: 0,
			expected: [
				[-2, -1, 1, 2],
				[-2, 0, 0, 2],
				[-1, 0, 0, 1],
			],
		},
		{ input: [2, 2, 2, 2, 2], target: 8, expected: [[2, 2, 2, 2]] },
		{ input: [-3, -1, 0, 2, 4, 5], target: 2, expected: [[-3, -1, 2, 4]] },
		{ input: [1, 2, 3], target: 6, expected: [] },
		{ input: [], target: 0, expected: [] },
	])("$input target=$target", ({ input, target, expected }) => {
		const result = fourSum([...input], target);
		expect(normalize(result)).toEqual(normalize(expected));
		expect(new Set(normalize(result)).size).toBe(result.length);
	});
});
