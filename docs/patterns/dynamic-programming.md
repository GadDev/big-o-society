---
title: Dynamic Programming
description: "Solve each useful state once."
pattern: dynamic-programming
chapter: 13
tagline: "Save the work. Reuse the answer."
pageClass: bos-pattern-page
outline: [2, 3]
---

<PatternCallout label="PATTERN TELL" tone="memory">

**30-second trigger:** overlapping subproblems + reusable optimal/counting states


</PatternCallout>

## 1. The idea in plain English

Solve smaller states once, save the answers, and build larger answers from them.

**Analogy:** Write solved steps in a notebook instead of re-solving the same puzzle every time.

## 2. How to recognize it

Before touching the keyboard, ask:

- Does brute-force recursion recompute the same state?
- Can the answer be described using a smaller index/capacity/string prefix?
- Is the problem asking min, max, count, or feasibility across choices?
- Can I clearly write a recurrence?

If several of those are true, this pattern should be near the top of your shortlist.

## 3. Common forms of the pattern

- **Memoization:** top-down recursion + cache.
- **Tabulation:** bottom-up table.
- 1D DP.
- 2D DP.
- Knapsack-style take/skip.
- DFS + memoization.

## 4. The invariant to understand

> Every DP cell/state must have a sentence-level meaning before you write the transition.

This is more important than memorizing the code. If you can explain the invariant, you can usually rebuild the implementation under interview pressure.

## 5. TypeScript skeleton

```ts
const dp = new Array(n + 1).fill(0);

// base cases
dp[0] = /* ... */;

for (let i = 1; i <= n; i++) {
  dp[i] = /* combine smaller solved states */;
}
```

Treat this as a **shape**, not a solution to memorize. The important part is knowing what the state means and why it changes.

## 6. Complexity instinct

Usually number of states × work per transition.

Before submitting an exercise, say the time and space complexity out loud and explain **why**.

## 7. Common mistakes

- Writing a table before defining what `dp[i]` means.
- Missing base cases.
- Using a transition that reads states not computed yet.
- Treating every optimization problem as DP without identifying overlapping subproblems.

## 8. Recall drill — 2 minutes

Without looking above, answer these aloud:

1. What exactly does the DP state mean?
2. What are the base cases?
3. Which smaller states produce the current answer?

## 9. Recognition sentence

Complete this before every exercise:

> **“I think this is Dynamic Programming because …”**

If you cannot finish that sentence clearly, spend another minute understanding the problem before coding.

## 10. Memory hook

> **Trigger:** save repeated work → **Dynamic Programming**

---

## Ready for the job?

Close this file and tackle the exercise **without copying the template**.  
The goal is not to remember syntax. The goal is to recognize the pattern and rebuild it from first principles.
