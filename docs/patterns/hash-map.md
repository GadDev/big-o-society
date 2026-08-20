---
title: Hash Map
description: "Trade memory for instant recall."
pattern: hash-map
chapter: 2
tagline: "Remember. Count. Lookup."
pageClass: bos-pattern-page
outline: [2, 3]
---

<PatternCallout label="PATTERN TELL" tone="memory">

**30-second trigger:** remembering, counting, grouping, matching, or fast lookup


</PatternCallout>

## 1. The idea in plain English

Keep a smart notebook of what you have already seen.

**Analogy:** A labelled set of drawers: give me the label and I can quickly find the stored information.

## 2. How to recognize it

Before touching the keyboard, ask:

- Do I need to know whether I have seen something before?
- Do I need counts or frequencies?
- Do I need to map one value to another?
- Would a fast complement lookup replace a nested loop?

If several of those are true, this pattern should be near the top of your shortlist.

## 3. Common forms of the pattern

- Set for existence/uniqueness.
- Map value → index.
- Frequency map.
- Grouping by a computed key.
- Prefix state → count for subarray problems.

## 4. The invariant to understand

> Define exactly what each key and value mean before coding.

This is more important than memorizing the code. If you can explain the invariant, you can usually rebuild the implementation under interview pressure.

## 5. TypeScript skeleton

```ts
const seen = new Map<number, number>();

for (let i = 0; i < values.length; i++) {
  const value = values[i];

  if (seen.has(value)) {
    // use remembered information
  }

  seen.set(value, i);
}
```

Treat this as a **shape**, not a solution to memorize. The important part is knowing what the state means and why it changes.

## 6. Complexity instinct

Commonly O(n) time and O(n) extra space.

Before submitting an exercise, say the time and space complexity out loud and explain **why**.

## 7. Common mistakes

- Using `Map` when a `Set` is enough.
- Updating the map before checking when the order matters.
- Using mutable objects as keys without understanding identity semantics.
- Forgetting that expected O(1) lookup does not mean the whole algorithm is O(1).

## 8. Recall drill — 2 minutes

Without looking above, answer these aloud:

1. What is the key?
2. What information is stored as the value?
3. At what exact moment should the map be updated?

## 9. Recognition sentence

Complete this before every exercise:

> **“I think this is Hash Map / Set because …”**

If you cannot finish that sentence clearly, spend another minute understanding the problem before coding.

## 10. Memory hook

> **Trigger:** remember / count / seen → **Hash Map**

---

## Ready for the job?

Close this file and tackle the exercise **without copying the template**.  
The goal is not to remember syntax. The goal is to recognize the pattern and rebuild it from first principles.
