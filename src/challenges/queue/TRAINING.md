# 🚶 Queue / Deque — 10-Day Mastery Track

A queue handles work in **first-in, first-out** order. A deque adds efficient access at both ends. You will practice simulation, streaming, BFS, and monotonic deques.

Build this reflex:

> **process in arrival order / level by level / expire oldest -> Queue or Deque**

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
| 01 | Build an Array Queue | Easy | Queue fundamentals | L1 Recognize | `first in must be first out` |
| 02 | Number of Recent Calls | Easy | Expire old queue entries | L1→L2 | `keep recent events; discard oldest expired ones` |
| 03 | Moving Average from Data Stream | Easy | Fixed-size queue | L2 Implement | `rolling last k values -> queue + running sum` |
| 04 | First Unique Character in a Stream | Medium | Queue + frequency map | L2→L3 | `preserve arrival order while counts change` |
| 05 | Time Needed to Buy Tickets | Medium | Queue simulation reasoning | L3 Explain | `round-robin service in arrival order` |
| 06 | Dota2 Senate | Medium | Two queues of indices | L3→L4 | `two competing groups act in cyclic order` |
| 07 | Sliding Window Maximum | Hard | Monotonic deque | L4 Adapt | `window maximum + expiring old values -> decreasing deque` |
| 08 | Reveal Cards in Increasing Order | Medium | Queue of positions | L4 Adapt | `simulate operations on indices instead of values` |
| 09 | Shortest Path in Binary Matrix | Medium | BFS queue | L4→L5 | `unweighted shortest path -> explore level by level` |
| 10 | Shortest Subarray with Sum at Least K — Boss Fight | Hard | Prefix sum + monotonic deque | L5 Combine | `shortest range + negatives allowed -> prefix sums ordered by useful candidates` |

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
npm run practice -- queue 1
npm run practice -- queue 10
```
