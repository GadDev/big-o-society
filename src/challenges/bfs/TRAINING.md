# 🌊 Breadth-First Search (BFS) — 10-Day Mastery Track

BFS explores a problem **layer by layer**. It is the default instinct for shortest paths in unweighted graphs, minimum moves, and multi-source spreading problems.

Build this reflex:

> **minimum steps / shortest unweighted path / level-by-level expansion -> BFS**

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
| 01 | Binary Tree Level Order Traversal | Easy | Tree BFS by levels | L1 Recognize | `tree output grouped by depth -> queue one level at a time` |
| 02 | Minimum Depth of Binary Tree | Easy | Early-exit BFS | L1→L2 | `need nearest leaf -> first leaf reached by BFS is optimal` |
| 03 | Number of Islands with BFS | Medium | Grid connected components | L2 Implement | `count connected regions -> launch BFS from each unseen land cell` |
| 04 | Rotting Oranges | Medium | Multi-source BFS | L3 Explain | `many sources spread simultaneously each minute -> seed queue with all sources` |
| 05 | 01 Matrix | Medium | Nearest-source multi-source BFS | L3 Explain | `distance to nearest source for every cell -> start from every source at once` |
| 06 | Open the Lock | Medium | Implicit state graph | L3→L4 | `minimum moves between generated states -> BFS over states` |
| 07 | Word Ladder | Medium | BFS + pattern lookup | L4 Adapt | `fewest one-letter transformations -> words are graph states` |
| 08 | Shortest Path in Binary Matrix | Medium | 8-direction grid BFS | L4 Adapt | `shortest path in an unweighted grid -> BFS and mark visited when enqueued` |
| 09 | Nearest Exit from Entrance | Medium | Boundary-aware BFS | L4→L5 | `nearest valid boundary from a start -> BFS with a special goal condition` |
| 10 | Shortest Path with Obstacle Eliminations — Boss Fight | Hard | BFS with state dimension | L5 Combine | `same position can be worth revisiting with a better remaining resource` |

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
npm run practice -- bfs 1
npm run practice -- bfs 10
```
