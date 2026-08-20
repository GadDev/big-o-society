# 🪜 Hash Map — Progressive Hints

Use hints in order. Spend **10–15 focused minutes** before opening the next one. No final implementations are included.

## Day 01 — Contains Duplicate

**Hint 1 — Recognition:** seen before -> Set

**Hint 2 — Structure:** Ask what information from the past would make the current decision immediate. Decide whether you need membership, a count, an index, or a canonical key.

**Hint 3 — Proof question:** What information must you remember to detect a duplicate immediately?

## Day 02 — Two Sum

**Hint 1 — Recognition:** target - current -> lookup

**Hint 2 — Structure:** Ask what information from the past would make the current decision immediate. Decide whether you need membership, a count, an index, or a canonical key.

**Hint 3 — Proof question:** Why should you check for the complement before storing the current value?

## Day 03 — Valid Anagram

**Hint 1 — Recognition:** same items + same counts -> frequency map

**Hint 2 — Structure:** Ask what information from the past would make the current decision immediate. Decide whether you need membership, a count, an index, or a canonical key.

**Hint 3 — Proof question:** What does a frequency map capture that a plain Set does not?

## Day 04 — First Unique Character

**Hint 1 — Recognition:** need first unique -> count, then preserve order

**Hint 2 — Structure:** Ask what information from the past would make the current decision immediate. Decide whether you need membership, a count, an index, or a canonical key.

**Hint 3 — Proof question:** Why is a second left-to-right pass useful when the word “first” appears?

## Day 05 — Group Anagrams

**Hint 1 — Recognition:** same signature -> same bucket

**Hint 2 — Structure:** Ask what information from the past would make the current decision immediate. Decide whether you need membership, a count, an index, or a canonical key.

**Hint 3 — Proof question:** What makes a good canonical key, and what collisions must it avoid?

## Day 06 — Top K Frequent Elements

**Hint 1 — Recognition:** count first, rank second

**Hint 2 — Structure:** Ask what information from the past would make the current decision immediate. Decide whether you need membership, a count, an index, or a canonical key.

**Hint 3 — Proof question:** After counting, what second data structure lets you avoid repeatedly rescanning the map?

## Day 07 — Longest Consecutive Sequence

**Hint 1 — Recognition:** only grow from sequence starts

**Hint 2 — Structure:** Ask what information from the past would make the current decision immediate. Decide whether you need membership, a count, an index, or a canonical key.

**Hint 3 — Proof question:** Why should you only expand a sequence from a number whose predecessor is absent?

## Day 08 — Subarray Sum Equals K

**Hint 1 — Recognition:** prefix difference = target

**Hint 2 — Structure:** Ask what information from the past would make the current decision immediate. Decide whether you need membership, a count, an index, or a canonical key.

**Hint 3 — Proof question:** If currentPrefix - oldPrefix = k, what old prefix value are you looking for?

## Day 09 — Isomorphic Strings

**Hint 1 — Recognition:** one-to-one mapping -> two directions

**Hint 2 — Structure:** Ask what information from the past would make the current decision immediate. Decide whether you need membership, a count, an index, or a canonical key.

**Hint 3 — Proof question:** Why can a single map fail to enforce a one-to-one relationship?

## Day 10 — Max Points on a Line — Boss Fight

**Hint 1 — Recognition:** same anchor + same normalized slope -> same line

**Hint 2 — Structure:** Ask what information from the past would make the current decision immediate. Decide whether you need membership, a count, an index, or a canonical key.

**Hint 3 — Proof question:** How will you normalize slopes so 1/2, 2/4, and -1/-2 become exactly the same key?
