# 🪜 Sliding Window — Progressive Hints

Use hints in order. Spend **10–15 focused minutes** before opening the next one. No final implementations are included.

## Day 01 — Maximum Sum Subarray of Size K

**Hint 1 — Recognition:** contiguous + exact size k -> fixed window

**Hint 2 — Structure:** Write down what makes a window valid. The right edge grows the candidate; the left edge repairs or advances it.

**Hint 3 — Proof question:** When the window moves one step, which value leaves and which value enters?

## Day 02 — Maximum Average Subarray

**Hint 1 — Recognition:** average + exact size -> track window sum

**Hint 2 — Structure:** Write down what makes a window valid. The right edge grows the candidate; the left edge repairs or advances it.

**Hint 3 — Proof question:** Why is it wasteful to recompute each average from scratch?

## Day 03 — Longest Substring Without Repeating Characters

**Hint 1 — Recognition:** longest valid contiguous range -> grow, shrink on violation

**Hint 2 — Structure:** Write down what makes a window valid. The right edge grows the candidate; the left edge repairs or advances it.

**Hint 3 — Proof question:** What condition makes the current window invalid, and how far must the left edge move?

## Day 04 — Minimum Size Subarray Sum

**Hint 1 — Recognition:** positive numbers + minimum length satisfying threshold

**Hint 2 — Structure:** Write down what makes a window valid. The right edge grows the candidate; the left edge repairs or advances it.

**Hint 3 — Proof question:** Why do positive numbers make it safe to shrink once the sum reaches the target?

## Day 05 — Maximum Vowels in a Substring

**Hint 1 — Recognition:** exact length + count property -> rolling count

**Hint 2 — Structure:** Write down what makes a window valid. The right edge grows the candidate; the left edge repairs or advances it.

**Hint 3 — Proof question:** Which piece of state can you update in O(1) as the fixed window slides?

## Day 06 — Permutation in String

**Hint 1 — Recognition:** permutation of pattern -> equal frequency profile

**Hint 2 — Structure:** Write down what makes a window valid. The right edge grows the candidate; the left edge repairs or advances it.

**Hint 3 — Proof question:** Why must the candidate window have exactly the same length as the pattern?

## Day 07 — Find All Anagrams in a String

**Hint 1 — Recognition:** same as permutation, but collect every match

**Hint 2 — Structure:** Write down what makes a window valid. The right edge grows the candidate; the left edge repairs or advances it.

**Hint 3 — Proof question:** What state can be reused from the previous window instead of rebuilding frequencies?

## Day 08 — Longest Repeating Character Replacement

**Hint 1 — Recognition:** window size - most frequent <= replacements

**Hint 2 — Structure:** Write down what makes a window valid. The right edge grows the candidate; the left edge repairs or advances it.

**Hint 3 — Proof question:** How does “window length minus most frequent count” measure the replacements needed?

## Day 09 — Fruit Into Baskets

**Hint 1 — Recognition:** longest subarray with at most 2 types

**Hint 2 — Structure:** Write down what makes a window valid. The right edge grows the candidate; the left edge repairs or advances it.

**Hint 3 — Proof question:** What exactly must happen when the window contains a third distinct type?

## Day 10 — Minimum Window Substring — Boss Fight

**Hint 1 — Recognition:** cover all requirements -> shrink aggressively

**Hint 2 — Structure:** Write down what makes a window valid. The right edge grows the candidate; the left edge repairs or advances it.

**Hint 3 — Proof question:** How can you know in O(1) whether adding/removing one character changes the number of satisfied requirements?
