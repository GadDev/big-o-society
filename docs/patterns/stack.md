---
title: Stack
description: "The latest unresolved thing gets handled first."
pattern: stack
chapter: 5
tagline: "Last in. First out."
pageClass: bos-pattern-page
outline: [2, 3]
---

<PatternCallout label="PATTERN TELL" tone="memory">

**30-second trigger:** last-in-first-out, nesting, undo, nearest previous/next item


</PatternCallout>

## 1. The idea in plain English

The most recently stored item is the first one you can remove.

**Analogy:** A stack of plates: you naturally take the top plate first.

## 2. How to recognize it

Before touching the keyboard, ask:

- Do I need to match nested opening/closing symbols?
- Do I need the most recent unresolved item?
- Am I looking for the next greater/smaller element?
- Does the algorithm naturally undo the latest action first?

If several of those are true, this pattern should be near the top of your shortlist.

## 3. Common forms of the pattern

- Basic LIFO stack.
- Parsing/nesting stack.
- Monotonic increasing/decreasing stack.
- Stack simulating recursion or undo.

## 4. The invariant to understand

> Know what every item on the stack represents and why unresolved items remain there.

This is more important than memorizing the code. If you can explain the invariant, you can usually rebuild the implementation under interview pressure.

## 5. TypeScript skeleton

```ts
const stack: number[] = [];

for (const value of values) {
  while (stack.length && /* top should be resolved */) {
    const top = stack.pop()!;
    // process top
  }

  stack.push(value);
}
```

Treat this as a **shape**, not a solution to memorize. The important part is knowing what the state means and why it changes.

## 6. Complexity instinct

Many monotonic-stack algorithms are O(n) because each item is pushed and popped at most once.

Before submitting an exercise, say the time and space complexity out loud and explain **why**.

## 7. Common mistakes

- Using `shift()` and accidentally turning the structure into a queue.
- Popping before processing the information you still need.
- Not defining whether a monotonic stack stores values or indices.
- Failing to handle leftover unmatched items.

## 8. Recall drill — 2 minutes

Without looking above, answer these aloud:

1. What does the top of the stack mean?
2. When is an item resolved and safe to pop?
3. Why can each element be processed only a constant number of times?

## 9. Recognition sentence

Complete this before every exercise:

> **“I think this is Stack because …”**

If you cannot finish that sentence clearly, spend another minute understanding the problem before coding.

## 10. Memory hook

> **Trigger:** last in, first out / nested / nearest unresolved → **Stack**

---

## Ready for the job?

Close this file and tackle the exercise **without copying the template**.  
The goal is not to remember syntax. The goal is to recognize the pattern and rebuild it from first principles.
