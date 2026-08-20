---
title: Queue
description: "Process work in the order it becomes ready."
pattern: queue
chapter: 6
tagline: "First in. First out."
pageClass: bos-pattern-page
outline: [2, 3]
---

<PatternCallout label="PATTERN TELL" tone="memory">

**30-second trigger:** first-in-first-out, scheduling, levels, streams


</PatternCallout>

## 1. The idea in plain English

Process things in the same order they become ready.

**Analogy:** People waiting at a ticket counter: the first person in line is served first.

## 2. How to recognize it

Before touching the keyboard, ask:

- Must work be processed in arrival order?
- Do I need BFS or level-by-level processing?
- Do I need efficient operations from both ends?
- Am I maintaining candidates over a moving range?

If several of those are true, this pattern should be near the top of your shortlist.

## 3. Common forms of the pattern

- FIFO queue.
- Deque with both-end operations.
- Monotonic deque.
- Queue used for BFS/state exploration.

## 4. The invariant to understand

> Everything currently in the queue is discovered/ready but not yet fully processed.

This is more important than memorizing the code. If you can explain the invariant, you can usually rebuild the implementation under interview pressure.

## 5. TypeScript skeleton

```ts
const queue: number[] = [start];
let head = 0;

while (head < queue.length) {
  const current = queue[head++];

  for (const next of neighbors(current)) {
    queue.push(next);
  }
}
```

Treat this as a **shape**, not a solution to memorize. The important part is knowing what the state means and why it changes.

## 6. Complexity instinct

Queue operations should be O(1); traversals are often O(V + E).

Before submitting an exercise, say the time and space complexity out loud and explain **why**.

## 7. Common mistakes

- Using `Array.shift()` repeatedly in performance-sensitive JS/TS code.
- Marking nodes visited too late and enqueuing duplicates.
- Confusing a normal queue with a monotonic deque.
- Not separating BFS levels when the problem asks for distance/steps.

## 8. Recall drill — 2 minutes

Without looking above, answer these aloud:

1. What is waiting in the queue?
2. When should something be marked visited?
3. Do you need FIFO, or do you really need a deque?

## 9. Recognition sentence

Complete this before every exercise:

> **“I think this is Queue / Deque because …”**

If you cannot finish that sentence clearly, spend another minute understanding the problem before coding.

## 10. Memory hook

> **Trigger:** first in, first out / process by level → **Queue**

---

## Ready for the job?

Close this file and tackle the exercise **without copying the template**.  
The goal is not to remember syntax. The goal is to recognize the pattern and rebuild it from first principles.
