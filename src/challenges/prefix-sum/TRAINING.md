# ⚔️ Prefix Sum — 10-Day Mastery Track

The goal is not to memorize ten answers. Build this reflex:

> **When I need many range totals or need to reason about the sum before an index, I should consider Prefix Sum.**

> **Running Sum → Range Sum Query → Pivot Index → Highest Altitude → Subarray Sum Equals K → Subarrays Divisible by K → Continuous Subarray Sum → Difference Array → 2D Prefix Sum → Count Range Sum 👹**

### Memory reflex:

> **Lots of range sums / need to know everything before this position → Prefix Sum.**

## Daily ritual — 30–45 minutes

1. 🧠 **Recall — 2 min** — explain yesterday’s invariant/state without notes.
2. 🔎 **Recognize — 5 min** — identify the exact Prefix Sum variant before coding.
3. 💻 **Implement — 20 min** — solve from scratch; no solution lookup.
4. 🧪 **Test — 5 min** — run today’s Vitest file and fix edge cases.
5. 🗣️ **Explain — 5 min** — explain correctness + time/space complexity.
6. 📝 **Remember — 2 min** — write one trigger phrase from memory.

## Progression

| Day | Exercise                             | Difficulty | Variant                                  | Mastery      | Memory trigger                                              |
| --- | ------------------------------------ | ---------- | ---------------------------------------- | ------------ | ----------------------------------------------------------- |
| 01  | Running Sum                          | Easy       | 1D prefix construction                   | L1 Recognize | `sum up to i -> carry history forward`                      |
| 02  | Range Sum Query                      | Easy       | Prefix difference                        | L1→L2        | `range sum = history at right - history before left`        |
| 03  | Find Pivot Index                     | Easy       | Total sum + running prefix               | L2 Implement | `left sum vs total - left - current`                        |
| 04  | Find the Highest Altitude            | Easy       | Prefix accumulation                      | L2→L3        | `changes/deltas -> reconstruct cumulative state`            |
| 05  | Subarray Sum Equals K                | Medium     | Prefix sum + Hash Map                    | L3 Explain   | `prefix difference = target`                                |
| 06  | Subarrays Divisible by K             | Medium     | Prefix remainder frequencies             | L3→L4        | `same remainder -> difference divisible by k`               |
| 07  | Continuous Subarray Sum              | Medium     | Prefix remainder + earliest index        | L4 Adapt     | `same remainder far enough apart -> divisible subarray`     |
| 08  | Range Addition with Difference Array | Medium     | Difference array → prefix reconstruction | L4 Adapt     | `many range updates -> mark boundaries, prefix once`        |
| 09  | 2D Region Sum Matrix                 | Medium     | 2D prefix sum                            | L4→L5        | `rectangle sum -> inclusion/exclusion of four prefixes`     |
| 10  | Count of Range Sum — Boss Fight      | Hard       | Prefix sums + divide and conquer         | L5 Combine   | `subarray sums become differences between ordered prefixes` |

## The explanation test

A green test suite is **not enough**. Before marking a day complete, answer aloud:

- What does prefix[i] represent?
- What is the exact range formula?
- Why does subtraction remove the unwanted history?
- Do I need a frequency/index map alongside the prefix sum?
- Could a difference array make updates cheaper?
- What are preprocessing, query, time, and space costs?

## Spaced repetition

- **+1 day** — explain only, no code.
- **+3 days** — code without hints.
- **+7 days** — code with a 15-minute limit.
- **+14 days** — solve a variation or change the constraints.
- **+30 days** — identify the pattern/variant in under 60 seconds.

## Running this track

```bash
npm run practice -- prefix-sum 1
npm run practice -- prefix-sum 10
```
