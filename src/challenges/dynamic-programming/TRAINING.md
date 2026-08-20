# 📈 Dynamic Programming — 10-Day Mastery Track

Dynamic Programming (DP) solves a big problem by defining **small reusable states**. The key questions are: what does `dp[state]` mean, what earlier states lead here, and what base cases make the recurrence start?

Build this reflex:

> **same subproblems repeat / best answer built from smaller answers -> Dynamic Programming**

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
| 01 | Climbing Stairs | Easy | 1D recurrence | L1 Recognize | `ways to reach step i come from the last possible moves` |
| 02 | Min Cost Climbing Stairs | Easy | 1D min-cost DP | L2 Implement | `minimum cost to reach a position depends only on the previous two positions` |
| 03 | House Robber | Medium | Take/skip DP | L2→L3 | `at each house choose rob current + best two back, or skip current` |
| 04 | Coin Change | Medium | Unbounded minimum DP | L3 Explain | `best amount x = one coin + best answer for x-coin` |
| 05 | Longest Increasing Subsequence | Medium | Sequence DP | L3 Explain | `best increasing sequence ending here depends on smaller earlier values` |
| 06 | Unique Paths | Medium | 2D grid DP | L3→L4 | `ways to a cell come from top + left` |
| 07 | Longest Common Subsequence | Medium | 2D string DP | L4 Adapt | `state is best answer for two prefixes; matching chars advance both` |
| 08 | Partition Equal Subset Sum | Medium | 0/1 knapsack DP | L4 Adapt | `can a subset reach total/2? update achievable sums without reusing an item` |
| 09 | Decode Ways | Medium | DP with validity rules | L4→L5 | `count ways to decode prefix using valid one-digit and two-digit endings` |
| 10 | Edit Distance — Boss Fight | Hard | 2D transformation DP | L5 Combine | `state compares prefixes; replace/delete/insert map to three neighboring states` |

## Graduation questions

A green test suite is not enough. Answer aloud:

- What is the state?
- What invariant remains true?
- Why is this move/choice/transition safe?
- What brute-force work did the pattern remove?
- When would this pattern **not** be valid?
- What are time and space complexity?

## Spaced repetition

- **+1 day** — explain without code.
- **+3 days** — recode without hints.
- **+7 days** — solve with a 15-minute limit.
- **+14 days** — solve a variation or changed constraint.
- **+30 days** — recognize the pattern/variant in under 60 seconds.

## Running this track

```bash
npm run practice -- dynamic-programming 1
npm run practice -- dynamic-programming 10
```
