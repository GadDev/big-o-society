# 🧠 DSA Pattern Master aka Big O Society

A small TypeScript + Vite + Vitest dojo for **daily DSA pattern recognition**.

## Start

```bash
npm install
npm test
```

## Daily ritual — 30 to 45 minutes

1. **2 min — Recall:** say yesterday's pattern aloud without notes.
2. **5 min — Recognize:** identify today's pattern before coding.
3. **20 min — Solve:** implement from scratch; no solution lookup.
4. **5 min — Test:** run Vitest, fix edge cases.
5. **5 min — Explain:** say why the pattern fits and its time/space complexity.
6. **2 min — Memory:** write one trigger phrase: `sorted + pair -> two pointers`.

## 14-pattern cycle

| Day | Pattern             | Starter problem      | Recognition clue         |
| --- | ------------------- | -------------------- | ------------------------ |
| 1   | Two Pointers        | Palindrome           | compare from both ends   |
| 2   | Hash Map / Set      | Two Sum              | seen before / frequency  |
| 3   | Sliding Window      | Max sum of k items   | contiguous range         |
| 4   | Prefix Sum          | Range sum            | many range totals        |
| 5   | Stack               | Valid parentheses    | nested / undo / previous |
| 6   | Queue               | Process tasks        | first-in-first-out       |
| 7   | Binary Search       | Find target          | sorted + halve search    |
| 8   | Fast & Slow         | Detect cycle         | loop / repeated path     |
| 9   | DFS                 | Tree depth           | explore deep             |
| 10  | BFS                 | Shortest path        | minimum steps / levels   |
| 11  | Backtracking        | Generate subsets     | all possibilities        |
| 12  | Greedy              | Interval selection   | best choice now          |
| 13  | Dynamic Programming | Climbing stairs      | repeated subproblems     |
| 14  | Graph Traversal     | Connected components | relationships / network  |

Then repeat the cycle with harder problems. The pattern stays; the disguise changes.

## Mastery ladder

- **Level 1 — Recognize:** name the pattern from the problem statement.
- **Level 2 — Implement:** code the basic template without notes.
- **Level 3 — Explain:** justify why it works + complexity.
- **Level 4 — Adapt:** solve a variation you have not seen.
- **Level 5 — Combine:** recognize problems requiring 2+ patterns.

## Weekly boss fight

Every 7th day, randomly pick 3 old problems. Give yourself **60 seconds each to name the pattern before coding**. Pattern recognition is the skill being trained—not memorizing LeetCode answers.

## Day 1

Each pattern has its own 10-exercise mastery track under `src/challenges/<pattern>/` (tests mirror it under `tests/<pattern>/`), plus a `TRAINING.md` ritual and progressive `HINTS.md` for that track — see `src/challenges/two-pointers/` for the template. `CURRICULUM.md` lists all 14 tracks; `src/patterns/<pattern>/README.md` has a short pattern refresher to read before you start.

Open `src/challenges/two-pointers/01-valid-palindrome.ts`. Make `tests/two-pointers/01-valid-palindrome.test.ts` green:

```bash
npm run practice -- two-pointers 1
```

Before touching the keyboard, say:

> “Two ends are being compared, so I should consider two pointers.”
