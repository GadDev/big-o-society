/**
 * Exercise 09 — Isomorphic Strings
 * Difficulty: Medium | Mastery: L4 Adapt
 * Variant: Bidirectional mapping
 *
 * Goal: given two strings `s` and `t` of the same length, return true if the
 * characters in `s` can be replaced to get `t`, with a consistent one-to-one
 * mapping in both directions.
 * Example: "egg" / "add" -> true (e->a, g->d, one-to-one both ways);
 *          "foo" / "bar" -> false (o would need to map to both a and r);
 *          "badc" / "baba" -> false (a and c both map to b, breaking one-to-one).
 *
 * Recognition trigger: one-to-one mapping -> two directions
 *
 * Before coding, say aloud:
 *   1. What clue points to Hash Map?
 *   2. What state/history must remain true while I scan?
 *
 * Critical explanation question:
 *   Why can a single map fail to enforce a one-to-one relationship?
 *
 * Complexity target:
 *   Time: O(n)
 *   Space: O(k)
 */

export function isIsomorphic(s: string, t: string): boolean {
	// TODO: determine whether characters in s can map one-to-one to characters in t.
	throw new Error("Not implemented");
}
