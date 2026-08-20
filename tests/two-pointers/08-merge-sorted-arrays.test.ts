import { describe, expect, it } from "vitest";
import { mergeSortedArrays } from "../../src/challenges/two-pointers/08-merge-sorted-arrays";

describe("08 — Merge Sorted Arrays In Place", () => {
	it.each([
		{
			nums1: [1, 2, 3, 0, 0, 0],
			m: 3,
			nums2: [2, 5, 6],
			n: 3,
			expected: [1, 2, 2, 3, 5, 6],
		},
		{ nums1: [1], m: 1, nums2: [], n: 0, expected: [1] },
		{ nums1: [0], m: 0, nums2: [1], n: 1, expected: [1] },
		{
			nums1: [4, 5, 6, 0, 0, 0],
			m: 3,
			nums2: [1, 2, 3],
			n: 3,
			expected: [1, 2, 3, 4, 5, 6],
		},
		{
			nums1: [-3, -1, 0, 0, 0],
			m: 2,
			nums2: [-2, 2, 4],
			n: 3,
			expected: [-3, -2, -1, 2, 4],
		},
	])("$nums1 + $nums2", ({ nums1, m, nums2, n, expected }) => {
		const target = [...nums1];
		expect(mergeSortedArrays(target, m, nums2, n)).toBeUndefined();
		expect(target).toEqual(expected);
	});
});
