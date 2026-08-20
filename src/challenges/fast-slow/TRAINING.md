# 🔁 Fast & Slow Pointers — 10-Day Mastery Track

Fast & Slow Pointers exploit **relative speed**. If a process enters a cycle, a faster traveler eventually catches a slower one. The same midpoint trick also unlocks linked-list transformations.

Build this reflex:

> **linked structure / repeated state / cycle -> move at different speeds**

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
| 01 | Middle of the Linked List | Easy | 1x / 2x speed | L1 Recognize | `need midpoint in one pass -> slow 1 step, fast 2` |
| 02 | Linked List Cycle | Easy | Floyd cycle detection | L1→L2 | `cycle + O(1) memory -> fast eventually catches slow` |
| 03 | Linked List Cycle II | Medium | Find cycle entry | L2 Implement | `meeting point exists; reset one pointer to head` |
| 04 | Happy Number | Easy | Cycle detection on generated states | L2→L3 | `repeated transformation eventually reaches 1 or loops` |
| 05 | Palindrome Linked List | Medium | Middle + reverse + compare | L3 Explain | `split at middle, reverse second half, compare halves` |
| 06 | Reorder List | Medium | Middle + reverse + merge | L3→L4 | `find middle, reverse second half, weave halves` |
| 07 | Find the Duplicate Number | Medium | Array values as next pointers | L4 Adapt | `numbers define a functional graph with a cycle` |
| 08 | Circular Array Loop | Medium | Directional cycle detection | L4 Adapt | `cycle exists only if movement keeps one direction and length > 1` |
| 09 | Maximum Twin Sum of a Linked List | Medium | Middle + reverse + pair | L4→L5 | `twin positions become adjacent traversals after reversing half` |
| 10 | Cycle Analyzer — Boss Fight | Hard | Floyd + cycle metrics | L5 Combine | `detect cycle, locate entry, measure loop and tail` |

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
npm run practice -- fast-slow 1
npm run practice -- fast-slow 10
```
