---
title: BFS
description: "The nearest layer gets handled first."
pattern: bfs
chapter: 10
tagline: "Explore level by level."
pageClass: bos-pattern-page
outline: [2, 3]
---

<PatternCallout label="PATTERN TELL" tone="memory">

**30-second trigger:** shortest path in unweighted graph, nearest target, level order


</PatternCallout>

## 1. The idea in plain English

Explore everything one step away before anything two steps away.

**Analogy:** Ripples spread outward from a stone in water.

## 2. How to recognize it

Before touching the keyboard, ask:

- Do I need the fewest number of steps?
- Are all moves/edges equal cost?
- Does the problem talk about levels, distance, nearest, or minimum moves?
- Are there multiple starting points that should spread simultaneously?

If several of those are true, this pattern should be near the top of your shortlist.

## 3. Common forms of the pattern

- Tree level order.
- Graph shortest path.
- Grid BFS.
- Multi-source BFS.
- State-space BFS.

## 4. The invariant to understand

> When a state is first discovered in ordinary unweighted BFS, you have found its shortest distance from the source.

This is more important than memorizing the code. If you can explain the invariant, you can usually rebuild the implementation under interview pressure.

## 5. TypeScript skeleton

```ts
const queue = [start];
let head = 0;
const visited = new Set([start]);

while (head < queue.length) {
  const current = queue[head++];

  for (const next of neighbors(current)) {
    if (visited.has(next)) continue;
    visited.add(next);
    queue.push(next);
  }
}
```

Treat this as a **shape**, not a solution to memorize. The important part is knowing what the state means and why it changes.

## 6. Complexity instinct

Usually O(V + E), or O(rows × cols) for grids.

Before submitting an exercise, say the time and space complexity out loud and explain **why**.

## 7. Common mistakes

- Using BFS for weighted edges where costs differ.
- Marking visited on dequeue instead of enqueue and creating duplicates.
- Not storing enough state for problems with keys, obstacles, or remaining resources.
- Forgetting multi-source initialization when several sources expand at once.

## 8. Recall drill — 2 minutes

Without looking above, answer these aloud:

1. Why does first discovery give the shortest path here?
2. What exactly belongs in the BFS state?
3. Could multiple sources start in the queue together?

## 9. Recognition sentence

Complete this before every exercise:

> **“I think this is Breadth-First Search (BFS) because …”**

If you cannot finish that sentence clearly, spend another minute understanding the problem before coding.

## 10. Memory hook

> **Trigger:** level by level / nearest / minimum steps → **BFS**

---

## Ready for the job?

Close this file and tackle the exercise **without copying the template**.  
The goal is not to remember syntax. The goal is to recognize the pattern and rebuild it from first principles.
