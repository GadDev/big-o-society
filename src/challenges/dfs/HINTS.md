# 🪜 Depth-First Search (DFS) — Progressive Hints

Use hints in order. Spend **10–15 focused minutes** before opening the next one. No final implementations are included.

## Day 01 — Maximum Depth of Binary Tree

**Hint 1 — Recognition:** tree height -> depth of children + 1

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** What should an empty subtree return?

## Day 02 — Invert Binary Tree

**Hint 1 — Recognition:** same operation independently applies to every subtree

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** At what point can left and right children be swapped safely?

## Day 03 — Same Tree

**Hint 1 — Recognition:** compare two recursive structures node by node

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** Which base cases distinguish equal absence from structural mismatch?

## Day 04 — Path Sum

**Hint 1 — Recognition:** root-to-leaf condition -> carry remaining target

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** Why must success be checked specifically at a leaf?

## Day 05 — Flood Fill

**Hint 1 — Recognition:** connected cells with same value -> explore neighbors

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** Why must you mark/change a cell before exploring its neighbors?

## Day 06 — Number of Islands

**Hint 1 — Recognition:** count regions -> launch DFS from each unseen land cell

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** Why does one DFS correspond to exactly one island?

## Day 07 — Clone Graph

**Hint 1 — Recognition:** cycles mean cloned nodes must be remembered before recursing

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** Why must the clone be stored before exploring neighbors?

## Day 08 — All Paths From Source to Target

**Hint 1 — Recognition:** enumerate every branch -> choose, recurse, undo

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** Which state belongs to the current path rather than global visited state?

## Day 09 — Course Schedule

**Hint 1 — Recognition:** dependency graph valid only if no active recursion cycle

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** Why are “visiting” and “fully visited” different states?

## Day 10 — Longest Increasing Path in a Matrix — Boss Fight

**Hint 1 — Recognition:** same DFS subproblem repeats from many starting cells

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** What value should be memoized for each cell so no path subtree is recomputed?
