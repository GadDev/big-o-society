/**
 * Exercise 08 — Merge Sorted Arrays In Place
 * Difficulty: Medium | Mastery: Level 4 — Adapt
 *
 * `nums1` has length m + n. Its first m values are sorted valid values and its
 * final n positions are empty buffer slots represented by zeroes. `nums2`
 * contains n sorted values. Merge nums2 into nums1 in ascending order in place.
 *
 * Example:
 *   nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 *   nums1 becomes [1,2,2,3,5,6]
 *
 * Constraints:
 *   - O(m + n) time
 *   - O(1) auxiliary space
 *
 * Recognition challenge:
 *   Starting from the front risks overwriting unread values. From which end
 *   should the write pointer begin?
 */
export function mergeSortedArrays(
	nums1: number[],
	m: number,
	nums2: number[],
	n: number,
): void {
	// TODO: use two read pointers plus a write position, starting from the end.
	throw new Error("Not implemented");
}
