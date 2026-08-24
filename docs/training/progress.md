---
title: Training Board
description: Big O Society spaced-repetition review queue.
outline: false
---

# Training Board

The Society does not ask **“What have you completed?”**

It asks:

> **“What are you in danger of forgetting?”**

For the pilot, this board tracks the ten **Two Pointers** Jobs in your browser using `localStorage`.

## Review rules

- First solve → **+1 day**
- Clean review → **+3 days**
- Clean review → **+7 days**
- Clean review → **+14 days**
- Clean review → **+30 days**
- Pass the +30 review → **MASTERED**
- A weak review resets or repeats the interval.

A file also gains a **weakness score** when you need many hints, miss the pattern, go overtime, or fail a review. A strong review reduces that score.

<TwoPointersReviewQueue />

## What the board should eventually say

Examples:

- **Two Pointers · Job 06 — +7-day review due**
- **Two Pointers · Job 09 — weak, attempt again**
- **Two Pointers · Job 03 — mastered**
- **No reviews due today — take the next new Job**

Once this pilot feels right, the exact same record model can be reused for Sliding Window, Hash Map, DP and every other pattern.
