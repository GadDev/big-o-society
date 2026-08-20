# ⚔️ Two Pointers — 10-Day Mastery Track

The goal is not to memorize ten answers. The goal is to build one reflex:

> **When movement through ordered data lets me eliminate impossible choices, I should consider two pointers.**

## Daily ritual — 30–45 minutes

1. 🧠 **Recall — 2 min** — explain yesterday's pointer invariant without notes.
2. 🔎 **Recognize — 5 min** — identify the exact *variant* before coding: opposite ends, read/write, backward merge, or nested two pointers.
3. 💻 **Implement — 20 min** — solve from scratch; no solution lookup.
4. 🧪 **Test — 5 min** — run today's Vitest file and fix edge cases.
5. 🗣️ **Explain — 5 min** — state why pointer movement is safe + time/space complexity.
6. 📝 **Remember — 2 min** — write one trigger phrase from memory.

## Progression

| Day | Exercise | Difficulty | Variant | Mastery | Memory trigger |
|---|---|---|---|---|---|
| 01 | Valid Palindrome | Easy | Opposite ends | L1 Recognize | `compare ends -> move inward` |
| 02 | Pair Sum Sorted | Easy | Opposite ends | L1 Recognize | `sorted + pair -> two pointers` |
| 03 | Remove Duplicates | Easy | Read / write | L2 Implement | `sorted + compact in place -> read/write` |
| 04 | Move Zeroes | Easy | Read / write | L2 Implement | `stable in-place filtering -> read/write` |
| 05 | Sorted Squares | Medium | Opposite ends + backward write | L2→L3 | `extreme absolute values live at ends` |
| 06 | Container Most Water | Medium | Opposite ends + invariant | L3 Explain | `move the limiting side` |
| 07 | Three Sum | Medium | Sort + fixed value + two pointers | L4 Adapt | `3 values -> freeze 1, solve pair` |
| 08 | Merge Sorted Arrays | Medium | Backward read/write | L4 Adapt | `buffer at end -> merge backward` |
| 09 | Trapping Rain Water | Hard | Opposite ends + running state | L4→L5 | `smaller boundary decides` |
| 10 | Four Sum | Hard | Sort + nested loops + two pointers | L5 Combine | `k-sum -> fix values until 2-sum` |

## How to run one exercise

```bash
npm run practice -- 1
npm run practice -- 2
# ...
npm run practice -- 10
```

Or run a test directly:

```bash
npx vitest run tests/two-pointers/06-container-most-water.test.ts
```

## The explanation test

A green test suite is **not enough**. Before marking a day complete, answer these aloud:

- What does each pointer mean?
- What invariant remains true after every pointer move?
- Why can I safely discard the values I just skipped?
- What is the time complexity?
- What is the auxiliary space complexity?
- What brute-force solution did Two Pointers improve?

If you cannot explain the pointer movement, repeat the exercise tomorrow from a blank file.

## Spaced repetition

Do not abandon solved exercises. Re-solve them from scratch on this schedule:

- **+1 day** — explain only, no code.
- **+3 days** — code without hints.
- **+7 days** — code with a 15-minute limit.
- **+14 days** — solve a variation or change the constraints.
- **+30 days** — random recall: identify the variant in under 60 seconds.

## Weekly boss rule

After Day 7, randomly choose three previous exercises. You get **60 seconds per problem** to say:

1. the two-pointer variant,
2. where pointers start,
3. what makes each pointer move,
4. the expected complexity.

Only then may you code.
