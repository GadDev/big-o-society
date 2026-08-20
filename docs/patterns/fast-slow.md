---
title: Fast & Slow
description: "Two travelers, one path, different speeds."
pattern: fast-slow
chapter: 8
tagline: "Find the middle. Catch the cycle."
pageClass: bos-pattern-page
outline: [2, 3]
---

<PatternCallout label="PATTERN TELL" tone="memory">

**30-second trigger:** linked-list middle, cycles, repeated state


</PatternCallout>

## 1. The idea in plain English

Move two explorers through the same structure at different speeds.

**Analogy:** Two runners on a circular track: if there is a loop, the faster runner eventually catches the slower one.

## 2. How to recognize it

Before touching the keyboard, ask:

- Is this a linked-list middle problem?
- Could the structure contain a cycle?
- Do I need to find where a cycle begins?
- Can repeatedly applying a function be treated like walking through nodes?

If several of those are true, this pattern should be near the top of your shortlist.

## 3. Common forms of the pattern

- Slow +1, fast +2 to find midpoint.
- Floyd cycle detection.
- Cycle entry using reset-to-start.
- Functional graph/repeated state.

## 4. The invariant to understand

> Fast moves through the same sequence as slow, just at a different rate.

This is more important than memorizing the code. If you can explain the invariant, you can usually rebuild the implementation under interview pressure.

## 5. TypeScript skeleton

```ts
let slow = head;
let fast = head;

while (fast && fast.next) {
  slow = slow!.next;
  fast = fast.next.next;

  if (slow === fast) {
    // cycle detected
  }
}
```

Treat this as a **shape**, not a solution to memorize. The important part is knowing what the state means and why it changes.

## 6. Complexity instinct

Usually O(n) time and O(1) extra space.

Before submitting an exercise, say the time and space complexity out loud and explain **why**.

## 7. Common mistakes

- Comparing node values instead of node identity.
- Forgetting null checks before moving fast by two.
- Memorizing cycle-entry code without understanding why it works.
- Applying the technique where no repeated traversal state exists.

## 8. Recall drill — 2 minutes

Without looking above, answer these aloud:

1. Why must fast eventually meet slow in a cycle?
2. Why does slow end at the middle?
3. What is the repeated state in this problem?

## 9. Recognition sentence

Complete this before every exercise:

> **“I think this is Fast & Slow Pointers because …”**

If you cannot finish that sentence clearly, spend another minute understanding the problem before coding.

## 10. Memory hook

> **Trigger:** runner race / middle / cycle → **Fast & Slow**

---

## Ready for the job?

Close this file and tackle the exercise **without copying the template**.  
The goal is not to remember syntax. The goal is to recognize the pattern and rebuild it from first principles.
