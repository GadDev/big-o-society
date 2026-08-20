import { describe, expect, it } from "vitest";
import { maxPoints } from "../../src/challenges/hash-map/10-max-points-on-line";

describe("10 — Max Points on a Line", () => {
	it.each([
		{
			points: [
				[1, 1],
				[2, 2],
				[3, 3],
			] as [number, number][],
			expected: 3,
		},
		{
			points: [
				[1, 1],
				[3, 2],
				[5, 3],
				[4, 1],
				[2, 3],
				[1, 4],
			] as [number, number][],
			expected: 4,
		},
		{
			points: [
				[0, 0],
				[0, 1],
				[0, -1],
			] as [number, number][],
			expected: 3,
		},
		{ points: [[2, 3]] as [number, number][], expected: 1 },
		{ points: [] as [number, number][], expected: 0 },
	])("$points -> $expected", ({ points, expected }) =>
		expect(maxPoints(points)).toBe(expected),
	);
});
