# 🪜 Binary Search — Progressive Hints

Use hints in order. Spend **10–15 focused minutes** before opening the next one. No final implementations are included.

## Day 01 — Classic Binary Search

**Hint 1 — Recognition:** sorted data + exact target -> halve search space

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** Which half can be proven impossible after one comparison?

## Day 02 — Search Insert Position

**Hint 1 — Recognition:** find first position where value is not smaller than target

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** What invariant describes the answer even when target is absent?

## Day 03 — Find First and Last Position

**Hint 1 — Recognition:** duplicate target -> binary-search both boundaries

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** How must equality be handled differently when seeking first vs last occurrence?

## Day 04 — Find Peak Element

**Hint 1 — Recognition:** local slope tells which side contains a peak

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** Why does comparing nums[mid] with nums[mid+1] preserve at least one peak?

## Day 05 — Integer Square Root

**Hint 1 — Recognition:** largest integer satisfying x² <= n

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** How can you compare safely without relying on floating point?

## Day 06 — Search in Rotated Sorted Array

**Hint 1 — Recognition:** one half remains sorted even after rotation

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** How do you decide whether the target lies inside the sorted half?

## Day 07 — Find Minimum in Rotated Sorted Array

**Hint 1 — Recognition:** find pivot where sorted order wraps

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** Why is comparing mid with right enough to discard one side?

## Day 08 — Koko Eating Bananas

**Hint 1 — Recognition:** minimum feasible speed + feasibility is monotonic

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** What are the smallest and largest possible speeds, and why?

## Day 09 — Capacity to Ship Packages Within D Days

**Hint 1 — Recognition:** minimum feasible capacity + monotonic feasibility

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** What lower bound makes capacities below it obviously impossible?

## Day 10 — Median of Two Sorted Arrays — Boss Fight

**Hint 1 — Recognition:** choose partitions so left halves contain exactly half the data

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** Which inequalities prove that a partition is valid?
