---
title: Two Pointers
description: Big O Society case file 01 — Two Pointers.
pattern: two-pointers
chapter: 1
tagline: Opposite ends. One answer.
---

# Two Pointers

## The case file

Two Pointers is not one trick. It is a **family of movements** where two positions let you avoid examining every possible combination.

Before starting the Jobs, know these four forms:

1. **Opposite ends** — left starts at the beginning, right at the end.
2. **Read / write** — one pointer scans; another marks where useful data belongs.
3. **Backward merge** — pointers start near the end so writes do not destroy unread data.
4. **Freeze + two pointers** — an outer loop fixes one or more values, then Two Pointers solves the remaining pair.

<PatternCallout label="THE TELL" tone="memory">

**sorted / opposite ends / pair / in-place compaction → suspect Two Pointers**

</PatternCallout>

## The rule you must be able to explain

> **Why is moving this pointer safe?**

That is the heart of the pattern. If you cannot explain what possibilities a pointer move eliminates, you are moving it by memory rather than reasoning.

## The Society protocol

For every Job:

1. Read the briefing.
2. File your pattern suspicion **before coding**.
3. Start the Job Clock.
4. Implement the function in your challenge file.
5. Run Vitest and clear the Evidence Board.
6. Complete the debrief.
7. Close the case.
8. Return when the spaced-repetition queue calls the file back.

## The ten Jobs

| Job | Codename | Technical problem | Heat | Target |
| --- | --- | --- | --- | ---: |
| 01 | [The Mirror Job](./jobs/valid-palindrome) | Valid Palindrome | LOW HEAT | 12 min |
| 02 | [The Pairing](./jobs/pair-sum-sorted) | Pair Sum in a Sorted Array | LOW HEAT | 15 min |
| 03 | [The Cleanup](./jobs/remove-duplicates) | Remove Duplicates from Sorted Array | LOW HEAT | 15 min |
| 04 | [The Zero Sweep](./jobs/move-zeroes) | Move Zeroes | LOW HEAT | 15 min |
| 05 | [The Square Deal](./jobs/sorted-squares) | Squares of a Sorted Array | HOT | 18 min |
| 06 | [The Container Deal](./jobs/container-most-water) | Container With Most Water | HOT | 20 min |
| 07 | [The Three-Man Crew](./jobs/three-sum) | 3Sum | HOT | 25 min |
| 08 | [The Backroom Merge](./jobs/merge-sorted-arrays) | Merge Sorted Arrays In Place | HOT | 20 min |
| 09 | [The Reservoir](./jobs/trapping-rain-water) | Trapping Rain Water | RED ALERT | 30 min |
| 10 | [The Four-Way Contract](./jobs/four-sum) | 4Sum | MOST WANTED | 35 min |

## Mastery target

You have not mastered Two Pointers because you solved Job 10 once.

The file becomes **MASTERED** only after successful reviews at:

**+1 → +3 → +7 → +14 → +30 days**

Weak reviews send the Job back toward the front of the queue.

<TwoPointersReviewQueue />
