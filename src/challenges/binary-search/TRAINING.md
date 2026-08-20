# 🔍 Binary Search — 10-Day Mastery Track

Binary Search is not just “find a number in a sorted array.” Its deeper form is: **find the boundary where a monotonic condition changes**.

Build this reflex:

> **ordered search space + monotonic yes/no condition -> Binary Search**

## Daily ritual — 30–45 minutes

1. 🧠 **Recall — 2 min** — explain yesterday’s pattern/invariant without notes.
2. 🔎 **Recognize — 5 min** — identify the exact variant **before coding**.
3. 💻 **Implement — 20 min** — solve from scratch; no solution lookup.
4. 🧪 **Test — 5 min** — run today’s Vitest file and repair edge cases.
5. 🗣️ **Explain — 5 min** — explain correctness and time/space complexity.
6. 📝 **Remember — 2 min** — say the memory trigger from memory.

## Progression

| Day | Exercise | Difficulty | Skill | Mastery | Memory trigger |
|---|---|---|---|---|---|
| 01 | Classic Binary Search | Easy | Exact lookup | L1 Recognize | `sorted data + exact target -> halve search space` |
| 02 | Search Insert Position | Easy | Lower-bound boundary | L1→L2 | `find first position where value is not smaller than target` |
| 03 | Find First and Last Position | Medium | Left/right boundaries | L2 Implement | `duplicate target -> binary-search both boundaries` |
| 04 | Find Peak Element | Medium | Binary search on slope | L2→L3 | `local slope tells which side contains a peak` |
| 05 | Integer Square Root | Easy | Binary search numeric answer | L3 Explain | `largest integer satisfying x² <= n` |
| 06 | Search in Rotated Sorted Array | Medium | Identify sorted half | L3→L4 | `one half remains sorted even after rotation` |
| 07 | Find Minimum in Rotated Sorted Array | Medium | Rotation boundary | L4 Adapt | `find pivot where sorted order wraps` |
| 08 | Koko Eating Bananas | Medium | Binary search on answer | L4 Adapt | `minimum feasible speed + feasibility is monotonic` |
| 09 | Capacity to Ship Packages Within D Days | Medium | Binary search on answer | L4→L5 | `minimum feasible capacity + monotonic feasibility` |
| 10 | Median of Two Sorted Arrays — Boss Fight | Hard | Partition binary search | L5 Combine | `choose partitions so left halves contain exactly half the data` |

## The explanation test

A green test suite is **not graduation**. Also answer aloud:

- What does each pointer/stack/queue/recursive call represent?
- What invariant remains true after every operation?
- Why is the next move safe?
- What work gets permanently eliminated?
- What is the brute-force alternative?
- Why does this version meet the stated complexity target?

## Spaced repetition

- **+1 day** — explain without code.
- **+3 days** — recode without hints.
- **+7 days** — solve with a 15-minute limit.
- **+14 days** — solve a variation or changed constraint.
- **+30 days** — recognize the pattern/variant in under 60 seconds.

## Running this track

```bash
npm run practice -- binary-search 1
npm run practice -- binary-search 10
```
