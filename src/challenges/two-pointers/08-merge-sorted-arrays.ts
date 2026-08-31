/**
 * Exercise 08 — Merge Sorted Arrays In Place
 * Difficulty: Medium | Mastery: Level 4 — Adapt
 *
 * Goal: given `nums1` (length m + n, first m values sorted, remaining n slots
 * zero buffer) and `nums2` (n sorted values), merge nums2 into nums1 in place
 * in ascending order.
 * Example: nums1 = [1,2,3,0,0,0], m=3, nums2 = [2,5,6], n=3 -> nums1 becomes [1,2,2,3,5,6];
 *          nums1 = [0], m=0, nums2 = [1], n=1 -> nums1 becomes [1];
 *          nums1 = [1], m=1, nums2 = [], n=0 -> nums1 stays [1].
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
