# 🪜 Queue / Deque — Progressive Hints

Use hints in order. Spend **10–15 focused minutes** before opening the next one. No final implementations are included.

## Day 01 — Build an Array Queue

**Hint 1 — Recognition:** first in must be first out

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** Why is repeatedly using Array.shift() undesirable for a serious queue?

## Day 02 — Number of Recent Calls

**Hint 1 — Recognition:** keep recent events; discard oldest expired ones

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** Why can expired timestamps be removed permanently?

## Day 03 — Moving Average from Data Stream

**Hint 1 — Recognition:** rolling last k values -> queue + running sum

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** Which value leaves when the window exceeds capacity?

## Day 04 — First Unique Character in a Stream

**Hint 1 — Recognition:** preserve arrival order while counts change

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** Why can repeated characters be lazily removed only from the front?

## Day 05 — Time Needed to Buy Tickets

**Hint 1 — Recognition:** round-robin service in arrival order

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** Can you simulate without physically rotating an array every step?

## Day 06 — Dota2 Senate

**Hint 1 — Recognition:** two competing groups act in cyclic order

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** Why does adding n to the winning senator index correctly model the next round?

## Day 07 — Sliding Window Maximum

**Hint 1 — Recognition:** window maximum + expiring old values -> decreasing deque

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** Why can smaller values behind a new larger value be discarded forever?

## Day 08 — Reveal Cards in Increasing Order

**Hint 1 — Recognition:** simulate operations on indices instead of values

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** Why is it easier to simulate where cards go than to reverse the reveal directly?

## Day 09 — Shortest Path in Binary Matrix

**Hint 1 — Recognition:** unweighted shortest path -> explore level by level

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** Why is the first time you reach the target guaranteed shortest?

## Day 10 — Shortest Subarray with Sum at Least K — Boss Fight

**Hint 1 — Recognition:** shortest range + negatives allowed -> prefix sums ordered by useful candidates

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** Why do dominated prefix sums at the back never help a future answer?
