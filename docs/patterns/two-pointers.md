---
title: Two Pointers
description: "Move from both ends and eliminate impossible choices."
pattern: two-pointers
chapter: 1
tagline: "Opposite ends. One answer."
pageClass: bos-pattern-page
outline: [2, 3]
---

<PatternCallout label="PATTERN TELL" tone="memory">

**30-second trigger:** sorted data, opposite ends, pairs, or in-place scanning


</PatternCallout>

## 1. The idea in plain English

Put two fingers on the data and move one or both based on what you learn.

**Analogy:** Two hikers start at different places and move toward the answer instead of checking every possible pair.

## 2. How to recognize it

Before touching the keyboard, ask:

- Is the input sorted, or can sorting make the problem easier?
- Am I comparing values from two positions?
- Can moving one pointer safely eliminate many impossible answers?
- Do I need a read pointer and a write pointer for an in-place transformation?

If several of those are true, this pattern should be near the top of your shortlist.

## 3. Common forms of the pattern

- **Opposite ends:** left starts at 0, right starts at n - 1.
- **Same direction:** slow/write pointer follows fast/read pointer.
- **Partitioning:** pointers separate values into regions.
- **Nested + two pointers:** freeze one value, then solve the rest with two pointers.

## 4. The invariant to understand

> Be able to explain why moving a pointer cannot discard a valid answer.

This is more important than memorizing the code. If you can explain the invariant, you can usually rebuild the implementation under interview pressure.

## 5. TypeScript skeleton

```ts
let left = 0;
let right = values.length - 1;

while (left < right) {
  // inspect values[left] and values[right]

  if (/* move left is safe */) left++;
  else right--;
}
```

Treat this as a **shape**, not a solution to memorize. The important part is knowing what the state means and why it changes.

## 6. Complexity instinct

Often O(n) after sorting; if sorting is needed, usually O(n log n).

Before submitting an exercise, say the time and space complexity out loud and explain **why**.

## 7. Common mistakes

- Moving both pointers without a reason.
- Using two pointers on unsorted data when order is required.
- Not explaining why a pointer movement is safe.
- Forgetting duplicate handling in 3Sum/4Sum-style problems.

## 8. Recall drill — 2 minutes

Without looking above, answer these aloud:

1. What does each pointer represent?
2. Why is it safe to move the pointer you chose?
3. What brute-force combinations did you eliminate?

## 9. Recognition sentence

Complete this before every exercise:

> **“I think this is Two Pointers because …”**

If you cannot finish that sentence clearly, spend another minute understanding the problem before coding.

## 10. Memory hook

> **Trigger:** sorted / opposite ends / pair → **Two Pointers**

---

## Ready for the job?

Close this file and tackle the exercise **without copying the template**.  
The goal is not to remember syntax. The goal is to recognize the pattern and rebuild it from first principles.
