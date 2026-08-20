---
title: Graph Traversal
description: "Model the relationships, then walk the network."
pattern: graph-traversal
chapter: 14
tagline: "Follow the connections."
pageClass: bos-pattern-page
outline: [2, 3]
---

<PatternCallout label="PATTERN TELL" tone="memory">

**30-second trigger:** relationships, networks, dependencies, routes, connected components


</PatternCallout>

## 1. The idea in plain English

Model the world as things (nodes) and relationships (edges), then move through those connections.

**Analogy:** Cities are nodes, roads are edges; traversal answers who is reachable, how components connect, or which route/order is valid.

## 2. How to recognize it

Before touching the keyboard, ask:

- Are objects connected to other objects?
- Is this secretly a graph even if the word 'graph' never appears?
- Do I need reachability, components, cycles, dependencies, or shortest paths?
- Are edges directed, undirected, weighted, or unweighted?

If several of those are true, this pattern should be near the top of your shortlist.

## 3. Common forms of the pattern

- DFS/BFS traversal.
- Connected components.
- Topological sort.
- Bipartite coloring.
- Dijkstra for non-negative weighted shortest paths.
- Union-Find for connectivity.

## 4. The invariant to understand

> First model the graph correctly; traversal correctness depends on edge direction, weights, and visited-state semantics.

This is more important than memorizing the code. If you can explain the invariant, you can usually rebuild the implementation under interview pressure.

## 5. TypeScript skeleton

```ts
const graph: number[][] = Array.from({ length: n }, () => []);

for (const [a, b] of edges) {
  graph[a].push(b);
  graph[b].push(a); // remove for directed graph
}

// Then choose DFS, BFS, topo sort, Dijkstra, etc.
```

Treat this as a **shape**, not a solution to memorize. The important part is knowing what the state means and why it changes.

## 6. Complexity instinct

Basic traversal is O(V + E); weighted algorithms depend on the chosen data structure.

Before submitting an exercise, say the time and space complexity out loud and explain **why**.

## 7. Common mistakes

- Starting traversal before deciding whether edges are directed.
- Forgetting disconnected components.
- Using BFS for weighted shortest paths.
- Confusing graph modeling problems with the traversal algorithm itself.

## 8. Recall drill — 2 minutes

Without looking above, answer these aloud:

1. What are the nodes?
2. What creates an edge?
3. Is the graph directed/weighted?
4. Which traversal matches the question being asked?

## 9. Recognition sentence

Complete this before every exercise:

> **“I think this is Graph Traversal because …”**

If you cannot finish that sentence clearly, spend another minute understanding the problem before coding.

## 10. Memory hook

> **Trigger:** nodes + edges + movement → **Graph Traversal**

---

## Ready for the job?

Close this file and tackle the exercise **without copying the template**.  
The goal is not to remember syntax. The goal is to recognize the pattern and rebuild it from first principles.
