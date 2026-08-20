import { describe, expect, it } from "vitest";
import { threeSum } from "../../src/challenges/two-pointers/07-three-sum";

function normalize(rows: number[][]): string[] {
	return rows.map((row) => [...row].sort((a, b) => a - b).join(",")).sort();
}

describe("07 — Three Sum", () => {
	it.each([
		{
			input: [-1, 0, 1, 2, -1, -4],
			expected: [
				[-1, -1, 2],
				[-1, 0, 1],
			],
		},
		{ input: [0, 1, 1], expected: [] },
		{ input: [0, 0, 0], expected: [[0, 0, 0]] },
		{ input: [0, 0, 0, 0], expected: [[0, 0, 0]] },
		{
			input: [-2, 0, 1, 1, 2],
			expected: [
				[-2, 0, 2],
				[-2, 1, 1],
			],
		},
	])("$input", ({ input, expected }) => {
		const result = threeSum([...input]);
		expect(normalize(result)).toEqual(normalize(expected));
		expect(new Set(normalize(result)).size).toBe(result.length);
	});
});
