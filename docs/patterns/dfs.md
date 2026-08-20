---
title: DFS
description: "Follow one path to the end before coming back."
pattern: dfs
chapter: 9
tagline: "Go deep first."
pageClass: bos-pattern-page
outline: [2, 3]
---

<PatternCallout label="PATTERN TELL" tone="memory">

**30-second trigger:** explore one path/component fully before returning


</PatternCallout>

## 1. The idea in plain English

Go as deep as possible, then back up and try the next branch.

**Analogy:** Explore one corridor of a maze all the way before coming back to the junction.

## 2. How to recognize it

Before touching the keyboard, ask:

- Do I need to visit an entire tree/graph component?
- Does the solution naturally depend on answers from children?
- Am I checking every path or recursively exploring neighbors?
- Do I need cycle detection with states such as visiting/visited?

If several of those are true, this pattern should be near the top of your shortlist.

## 3. Common forms of the pattern

- Recursive tree DFS.
- Graph DFS with visited set.
- Grid flood fill.
- DFS + memoization.
- DFS with recursion-state cycle detection.

## 4. The invariant to understand

> A node should be processed according to a clear visited/state rule so recursion cannot wander forever.

This is more important than memorizing the code. If you can explain the invariant, you can usually rebuild the implementation under interview pressure.

## 5. TypeScript skeleton

```ts
function dfs(node: number): void {
  if (visited.has(node)) return;

  visited.add(node);

  for (const next of graph[node]) {
    dfs(next);
  }
}
```

Treat this as a **shape**, not a solution to memorize. The important part is knowing what the state means and why it changes.

## 6. Complexity instinct

Graph DFS is typically O(V + E).

Before submitting an exercise, say the time and space complexity out loud and explain **why**.

## 7. Common mistakes

- Forgetting a visited set in cyclic graphs.
- Marking visited at the wrong stage for cycle-detection variants.
- Accidentally sharing mutable path state between branches.
- Ignoring recursion-depth limits on very deep inputs.

## 8. Recall drill — 2 minutes

Without looking above, answer these aloud:

1. What is the base case?
2. What state belongs to one recursion branch versus all branches?
3. When should a node become visited?

## 9. Recognition sentence

Complete this before every exercise:

> **“I think this is Depth-First Search (DFS) because …”**

If you cannot finish that sentence clearly, spend another minute understanding the problem before coding.

## 10. Memory hook

> **Trigger:** go deep first → **DFS**

---

## Ready for the job?

Close this file and tackle the exercise **without copying the template**.  
The goal is not to remember syntax. The goal is to recognize the pattern and rebuild it from first principles.
