# 🪜 Fast & Slow Pointers — Progressive Hints

Use hints in order. Spend **10–15 focused minutes** before opening the next one. No final implementations are included.

## Day 01 — Middle of the Linked List

**Hint 1 — Recognition:** need midpoint in one pass -> slow 1 step, fast 2

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** When fast reaches the end, why must slow be at the middle?

## Day 02 — Linked List Cycle

**Hint 1 — Recognition:** cycle + O(1) memory -> fast eventually catches slow

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** Why can fast never permanently stay ahead inside a finite cycle?

## Day 03 — Linked List Cycle II

**Hint 1 — Recognition:** meeting point exists; reset one pointer to head

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** Why does moving both one step after the meeting lead to the cycle entry?

## Day 04 — Happy Number

**Hint 1 — Recognition:** repeated transformation eventually reaches 1 or loops

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** What is the “linked list” even though there are no ListNode objects?

## Day 05 — Palindrome Linked List

**Hint 1 — Recognition:** split at middle, reverse second half, compare halves

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** Why do you not need an extra array to compare mirrored values?

## Day 06 — Reorder List

**Hint 1 — Recognition:** find middle, reverse second half, weave halves

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** What pointer must be saved before rewiring each link?

## Day 07 — Find the Duplicate Number

**Hint 1 — Recognition:** numbers define a functional graph with a cycle

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** How can an array be interpreted as a linked structure without modifying it?

## Day 08 — Circular Array Loop

**Hint 1 — Recognition:** cycle exists only if movement keeps one direction and length > 1

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** What invalid cycles must be rejected even if pointers meet?

## Day 09 — Maximum Twin Sum of a Linked List

**Hint 1 — Recognition:** twin positions become adjacent traversals after reversing half

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** Why does reversing only the second half expose every twin pair?

## Day 10 — Cycle Analyzer — Boss Fight

**Hint 1 — Recognition:** detect cycle, locate entry, measure loop and tail

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** Once you know the entry, how can you measure cycle length and tail length without a map?
