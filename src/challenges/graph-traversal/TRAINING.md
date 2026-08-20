# 🌐 Graph Traversal — 10-Day Mastery Track

Graph problems are about **entities plus connections**. First build the graph correctly; then choose traversal state: visited, active recursion, color, indegree, distance, or accumulated weight.

Build this reflex:

> **relationships / dependencies / routes / connected entities -> build a graph, then traverse it**

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
| 01 | Find if Path Exists in Graph | Easy | Adjacency list + visited | L1 Recognize | `entities connected by edges and a reachability question -> graph traversal` |
| 02 | Number of Provinces | Medium | Connected components from matrix | L2 Implement | `count separate groups in connectivity data -> traversal per unseen node` |
| 03 | Count Connected Components | Medium | Undirected components | L2→L3 | `each unseen node starts exactly one new component` |
| 04 | Graph Valid Tree | Medium | Connectivity + cycle invariant | L3 Explain | `a tree must be connected and have no cycle` |
| 05 | Course Schedule II | Medium | Topological ordering | L3→L4 | `dependencies require an order where prerequisites appear first` |
| 06 | Is Graph Bipartite? | Medium | Graph coloring | L4 Adapt | `neighbors must be on opposite sides -> propagate two colors and detect contradiction` |
| 07 | Reorder Routes to Make All Paths Lead to Zero | Medium | Traversal with edge metadata | L4 Adapt | `traverse an undirected view while remembering which original edge direction needs reversal` |
| 08 | Evaluate Division | Medium | Weighted graph DFS/BFS | L4→L5 | `equations are weighted edges; query answer is product along a path` |
| 09 | Network Delay Time | Medium | Dijkstra shortest paths | L5 Combine | `weighted nonnegative edges -> repeatedly expand the cheapest known frontier` |
| 10 | Alien Dictionary — Boss Fight | Hard | Graph construction + topological sort | L5 Combine | `ordered words reveal precedence edges between first differing characters` |

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
npm run practice -- graph-traversal 1
npm run practice -- graph-traversal 10
```
