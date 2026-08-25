# Two-Pointer Approach — Mastery Schema

A reference for recognizing, choosing, and implementing every two-pointer pattern.

---

## 1. The one question that routes you to a pattern

> **Do my two pointers move through the same collection in the same direction, opposite directions, or across two separate collections?**

| Answer | Pattern | Typical signal in the problem |
|---|---|---|
| Same direction, different speeds | **Read/Write (Fast-Slow)** | "remove/filter in place", "in-place", "O(1) space" |
| Opposite ends, closing inward | **Converging (Left/Right)** | "sorted array", "find a pair that...", "palindrome" |
| Two different arrays/lists | **Merge (Dual-Pointer)** | "merge two sorted...", "intersection of two..." |
| Same direction, variable-size window | **Sliding Window** (two-pointer variant) | "longest/shortest substring/subarray with..." |

Sliding window is technically a two-pointer pattern too (both pointers move forward, but at different, data-dependent rates) — included at the end for completeness.

---

## 2. Pattern 1 — Read/Write (Fast-Slow)

**When:** mutate an array in place, filtering or compacting it, `O(1)` space required.

**Roles:**
- `read` — scans every element, always advances.
- `write` — marks the next slot for a value worth keeping. Only advances when `read` finds something acceptable.

**Invariant:** `write <= read` always. Everything before `write` is finalized/accepted.

**Template:**
```ts
function template(nums: number[]): number {
    let write = 0;
    for (let read = 0; read < nums.length; read++) {
        if (/* nums[read] should be kept */) {
            nums[write] = nums[read];
            write++;
        }
    }
    return write; // new logical length
}
```

**Practice set:**
- Remove duplicates from sorted array
- Remove duplicates from sorted array II (allow up to 2 copies)
- Move zeroes to the end
- Remove element (remove all instances of a given value)
- Partition array around a pivot (Dutch national flag is a 3-pointer variant of this)

---

## 3. Pattern 2 — Converging (Left/Right)

**When:** the array is **sorted** (or sortable), and you're searching for a pair/combination, or working symmetrically from both ends.

**Roles:**
- `left` — starts at index `0`.
- `right` — starts at index `length - 1`.
- Loop while `left < right`; move one side based on a comparison, using sortedness to know which move is "correct."

**Template:**
```ts
function template(nums: number[]): void {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        if (/* condition met */) {
            // record answer, then usually move both
            left++;
            right--;
        } else if (/* need bigger */) {
            left++;
        } else {
            right--;
        }
    }
}
```

**The reasoning trick:** always ask "if my current pair isn't right, which single move is *guaranteed* not to lose the true answer?" That guarantee only exists because the array is sorted.

**Practice set:**
- Two Sum II (sorted input)
- Valid palindrome
- Reverse array/string in place
- Container with most water
- 3Sum (fix one pointer, converge the other two)
- Trapping rain water (two-pointer variant)

---

## 4. Pattern 3 — Merge (Dual-Pointer across two collections)

**When:** you have two separate sorted collections and need to combine, compare, or find overlap.

**Roles:**
- `i` — pointer into collection A.
- `j` — pointer into collection B.
- Both move forward independently; you decide which to advance by comparing `A[i]` vs `B[j]`.

**Template:**
```ts
function template(a: number[], b: number[]): number[] {
    const result: number[] = [];
    let i = 0, j = 0;

    while (i < a.length && j < b.length) {
        if (a[i] <= b[j]) result.push(a[i++]);
        else result.push(b[j++]);
    }
    // drain whichever side has leftovers
    while (i < a.length) result.push(a[i++]);
    while (j < b.length) result.push(b[j++]);

    return result;
}
```

**Practice set:**
- Merge two sorted arrays/lists
- Merge step of merge sort
- Intersection of two sorted arrays
- Merge intervals (sort first, then single-pass compare)

---

## 5. Pattern 4 — Sliding Window (variable-rate two-pointer)

**When:** "longest/shortest/max/min **substring or subarray** satisfying some condition." Both pointers move forward, but `left` only catches up when the window becomes invalid.

**Roles:**
- `right` — expands the window every iteration.
- `left` — contracts the window only when a condition is violated.

**Template:**
```ts
function template(s: string): number {
    let left = 0;
    let best = 0;
    const seen = new Set<string>();

    for (let right = 0; right < s.length; right++) {
        while (/* window invalid, e.g. seen.has(s[right]) */ seen.has(s[right])) {
            seen.delete(s[left]);
            left++;
        }
        seen.add(s[right]);
        best = Math.max(best, right - left + 1);
    }
    return best;
}
```

**Practice set:**
- Longest substring without repeating characters
- Minimum window substring
- Longest subarray with sum ≤ k
- Max consecutive ones with k flips allowed

---

## 6. Decision checklist (use this before writing any code)

1. **Is the array/string sorted, or can I sort it without losing needed info (e.g. losing original indices)?**
   → Yes: converging pointers likely fit.
2. **Am I filtering/compacting one array in place with an O(1) space constraint?**
   → Yes: read/write pointers.
3. **Do I have two separate inputs to combine or compare?**
   → Yes: merge pattern.
4. **Is the ask about a contiguous run (substring/subarray) with a "longest/shortest/at most" condition?**
   → Yes: sliding window.
5. **Write down, in one sentence, what each pointer represents and what triggers it to move**, before writing any code. If you can't state this in one sentence per pointer, you don't understand the pattern yet for this problem — go back to the analogy.

---

## 7. Mental analogies (for quick recall)

| Pattern | Analogy |
|---|---|
| Read/Write | A bouncer at a door — everyone walks past, only some get waved in and counted |
| Converging | Two people searching a sorted bookshelf from opposite ends, meeting in the middle |
| Merge | Dealing cards from two face-up sorted piles into one pile, always taking the smaller top card |
| Sliding window | A rubber band stretching over a number line — expands until it breaks a rule, then contracts from behind until valid again |

---

## 8. Complexity you should be able to state for any solution

All four patterns above are:
- **Time:** `O(n)` or `O(n + m)` for two collections — one or two linear passes, never nested loops over the same data.
- **Space:** `O(1)` auxiliary space for read/write and converging patterns (excluding the output array where one is required, e.g. merge). Sliding window sometimes needs `O(k)` for a hash set/map tracking window contents.

If your solution to a two-pointer-shaped problem is `O(n²)` or uses `O(n)` extra space where the constraints ask for `O(1)`, you've likely defaulted to a brute-force or a `Set`/`Map` shortcut instead of the actual pattern — a signal to go back to the roles and re-derive the pointer movement.