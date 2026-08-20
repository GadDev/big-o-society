# 🪜 Prefix Sum — Progressive Hints

Use hints in order. Spend **10–15 focused minutes** before opening the next one. No final implementations are included.

## Day 01 — Running Sum

**Hint 1 — Recognition:** sum up to i -> carry history forward

**Hint 2 — Structure:** Define prefix[i] precisely. Then rewrite the requested range/subarray quantity as a difference between two prefix states.

**Hint 3 — Proof question:** What does prefix[i] mean in one sentence?

## Day 02 — Range Sum Query

**Hint 1 — Recognition:** range sum = history at right - history before left

**Hint 2 — Structure:** Define prefix[i] precisely. Then rewrite the requested range/subarray quantity as a difference between two prefix states.

**Hint 3 — Proof question:** Why does a leading zero make the formula cleaner at left = 0?

## Day 03 — Find Pivot Index

**Hint 1 — Recognition:** left sum vs total - left - current

**Hint 2 — Structure:** Define prefix[i] precisely. Then rewrite the requested range/subarray quantity as a difference between two prefix states.

**Hint 3 — Proof question:** How can one total sum replace a separate suffix array?

## Day 04 — Find the Highest Altitude

**Hint 1 — Recognition:** changes/deltas -> reconstruct cumulative state

**Hint 2 — Structure:** Define prefix[i] precisely. Then rewrite the requested range/subarray quantity as a difference between two prefix states.

**Hint 3 — Proof question:** Why are “changes between states” a strong clue for cumulative/prefix thinking?

## Day 05 — Subarray Sum Equals K

**Hint 1 — Recognition:** prefix difference = target

**Hint 2 — Structure:** Define prefix[i] precisely. Then rewrite the requested range/subarray quantity as a difference between two prefix states.

**Hint 3 — Proof question:** Why do we store prefix frequencies rather than only whether a prefix occurred?

## Day 06 — Subarrays Divisible by K

**Hint 1 — Recognition:** same remainder -> difference divisible by k

**Hint 2 — Structure:** Define prefix[i] precisely. Then rewrite the requested range/subarray quantity as a difference between two prefix states.

**Hint 3 — Proof question:** Why do equal prefix remainders imply the subarray between them is divisible by k?

## Day 07 — Continuous Subarray Sum

**Hint 1 — Recognition:** same remainder far enough apart -> divisible subarray

**Hint 2 — Structure:** Define prefix[i] precisely. Then rewrite the requested range/subarray quantity as a difference between two prefix states.

**Hint 3 — Proof question:** Why should the map keep the earliest index for each remainder instead of overwriting it?

## Day 08 — Range Addition with Difference Array

**Hint 1 — Recognition:** many range updates -> mark boundaries, prefix once

**Hint 2 — Structure:** Define prefix[i] precisely. Then rewrite the requested range/subarray quantity as a difference between two prefix states.

**Hint 3 — Proof question:** How is a difference array the “inverse idea” of a prefix sum?

## Day 09 — 2D Region Sum Matrix

**Hint 1 — Recognition:** rectangle sum -> inclusion/exclusion of four prefixes

**Hint 2 — Structure:** Define prefix[i] precisely. Then rewrite the requested range/subarray quantity as a difference between two prefix states.

**Hint 3 — Proof question:** Which overlapping areas get subtracted twice, and which corner must be added back?

## Day 10 — Count of Range Sum — Boss Fight

**Hint 1 — Recognition:** subarray sums become differences between ordered prefixes

**Hint 2 — Structure:** Define prefix[i] precisely. Then rewrite the requested range/subarray quantity as a difference between two prefix states.

**Hint 3 — Proof question:** After converting every subarray sum to prefix[j] - prefix[i], what structure lets you count valid differences faster than checking every pair?
