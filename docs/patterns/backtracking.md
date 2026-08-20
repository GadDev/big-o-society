---
title: Backtracking
description: "Try a path, erase the mistake, try another."
pattern: backtracking
chapter: 11
tagline: "Choose. Explore. Undo."
pageClass: bos-pattern-page
outline: [2, 3]
---

<PatternCallout label="PATTERN TELL" tone="memory">

**30-second trigger:** generate combinations/permutations or satisfy constraints


</PatternCallout>

## 1. The idea in plain English

Choose something, explore the consequences, then undo it and try another choice.

**Analogy:** Walk through a maze; at a dead end, return to the last fork and choose another path.

## 2. How to recognize it

Before touching the keyboard, ask:

- Must I generate all valid possibilities?
- Does the problem describe choices at each step?
- Can I stop exploring a branch as soon as it becomes impossible?
- Do I need to undo temporary state after recursion?

If several of those are true, this pattern should be near the top of your shortlist.

## 3. Common forms of the pattern

- Subsets/combinations.
- Permutations.
- Constraint satisfaction.
- Board search.
- Backtracking with pruning.

## 4. The invariant to understand

> Every recursive call owns a precise partial solution, and all mutations must be restored before returning.

This is more important than memorizing the code. If you can explain the invariant, you can usually rebuild the implementation under interview pressure.

## 5. TypeScript skeleton

```ts
function backtrack(path: number[]): void {
  if (/* complete solution */) {
    result.push([...path]);
    return;
  }

  for (const choice of choices) {
    if (/* invalid */) continue;

    path.push(choice);
    backtrack(path);
    path.pop();
  }
}
```

Treat this as a **shape**, not a solution to memorize. The important part is knowing what the state means and why it changes.

## 6. Complexity instinct

Often exponential; pruning is what makes difficult problems practical.

Before submitting an exercise, say the time and space complexity out loud and explain **why**.

## 7. Common mistakes

- Forgetting to undo mutable state.
- Pushing the same mutable array into results without copying it.
- Exploring branches that could be pruned early.
- Using global state when branch-local state is required.

## 8. Recall drill — 2 minutes

Without looking above, answer these aloud:

1. What are the choices at one level?
2. What makes a partial solution invalid?
3. What exact state must be undone?

## 9. Recognition sentence

Complete this before every exercise:

> **“I think this is Backtracking because …”**

If you cannot finish that sentence clearly, spend another minute understanding the problem before coding.

## 10. Memory hook

> **Trigger:** choose → explore → undo → **Backtracking**

---

## Ready for the job?

Close this file and tackle the exercise **without copying the template**.  
The goal is not to remember syntax. The goal is to recognize the pattern and rebuild it from first principles.
