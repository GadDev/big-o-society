---
title: Binary Search
description: "Use order to throw away half the search space."
pattern: binary-search
chapter: 7
tagline: "Cut the noise."
pageClass: bos-pattern-page
outline: [2, 3]
---

<PatternCallout label="PATTERN TELL" tone="memory">

**30-second trigger:** ordered search space that can be halved


</PatternCallout>

## 1. The idea in plain English

Ask a question at the middle that lets you safely discard half the remaining possibilities.

**Analogy:** Search a dictionary by jumping to the middle instead of reading every word.

## 2. How to recognize it

Before touching the keyboard, ask:

- Is the data sorted?
- Is there a monotonic true/false condition?
- Can I search the answer space rather than the array itself?
- Am I looking for the first or last position where a condition becomes true?

If several of those are true, this pattern should be near the top of your shortlist.

## 3. Common forms of the pattern

- Exact value search.
- Lower/upper bound.
- Rotated-array search.
- Binary search on answer.

## 4. The invariant to understand

> The answer must remain inside the current search interval after every update.

This is more important than memorizing the code. If you can explain the invariant, you can usually rebuild the implementation under interview pressure.

## 5. TypeScript skeleton

```ts
let left = 0;
let right = values.length - 1;

while (left <= right) {
  const mid = left + Math.floor((right - left) / 2);

  if (values[mid] === target) return mid;
  if (values[mid] < target) left = mid + 1;
  else right = mid - 1;
}

return -1;
```

Treat this as a **shape**, not a solution to memorize. The important part is knowing what the state means and why it changes.

## 6. Complexity instinct

Usually O(log n).

Before submitting an exercise, say the time and space complexity out loud and explain **why**.

## 7. Common mistakes

- Using the wrong loop condition for the chosen interval convention.
- Updating `left = mid` or `right = mid` and causing infinite loops.
- Assuming binary search only applies directly to arrays.
- Not proving the predicate is monotonic for search-on-answer.

## 8. Recall drill — 2 minutes

Without looking above, answer these aloud:

1. What exactly is the search space?
2. What fact lets you discard one half?
3. Are your interval boundaries inclusive or exclusive?

## 9. Recognition sentence

Complete this before every exercise:

> **“I think this is Binary Search because …”**

If you cannot finish that sentence clearly, spend another minute understanding the problem before coding.

## 10. Memory hook

> **Trigger:** ordered space you can halve → **Binary Search**

---

## Ready for the job?

Close this file and tackle the exercise **without copying the template**.  
The goal is not to remember syntax. The goal is to recognize the pattern and rebuild it from first principles.
