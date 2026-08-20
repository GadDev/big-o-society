# 🌳 Depth-First Search (DFS) — 10-Day Mastery Track

DFS means **follow one path as far as it goes, then backtrack**. Trees give you the cleanest version; grids and graphs add visited-state and cycle concerns.

Build this reflex:

> **explore one branch completely / connected region / recursive structure -> DFS**

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
| 01 | Maximum Depth of Binary Tree | Easy | Recursive tree DFS | L1 Recognize | `tree height -> depth of children + 1` |
| 02 | Invert Binary Tree | Easy | Tree mutation DFS | L1→L2 | `same operation independently applies to every subtree` |
| 03 | Same Tree | Easy | Parallel DFS | L2 Implement | `compare two recursive structures node by node` |
| 04 | Path Sum | Easy | DFS with path state | L2→L3 | `root-to-leaf condition -> carry remaining target` |
| 05 | Flood Fill | Medium | Grid DFS | L3 Explain | `connected cells with same value -> explore neighbors` |
| 06 | Number of Islands | Medium | Connected components | L3→L4 | `count regions -> launch DFS from each unseen land cell` |
| 07 | Clone Graph | Medium | Graph DFS + map | L4 Adapt | `cycles mean cloned nodes must be remembered before recursing` |
| 08 | All Paths From Source to Target | Medium | DFS path construction | L4 Adapt | `enumerate every branch -> choose, recurse, undo` |
| 09 | Course Schedule | Medium | DFS cycle detection | L4→L5 | `dependency graph valid only if no active recursion cycle` |
| 10 | Longest Increasing Path in a Matrix — Boss Fight | Hard | DFS + memoization | L5 Combine | `same DFS subproblem repeats from many starting cells` |

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
npm run practice -- dfs 1
npm run practice -- dfs 10
```
