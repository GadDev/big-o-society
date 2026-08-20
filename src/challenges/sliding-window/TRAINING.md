# ⚔️ Sliding Window — 10-Day Mastery Track

The goal is not to memorize ten answers. Build this reflex:

> **When the problem asks about a contiguous range and I can update that range incrementally instead of restarting, I should consider Sliding Window.**

> **Maximum Sum Size K → Maximum Average → Longest Substring Without Repeating → Minimum Size Subarray → Maximum Vowels → Permutation in String → Find All Anagrams → Character Replacement → Fruit Into Baskets → Minimum Window Substring 👹**

The key idea you'll repeatedly practice is:

> **Right pointer explores. Left pointer repairs.**

### Memory reflex:

> **Contiguous range + I can update it without restarting → Sliding Window.**

## Daily ritual — 30–45 minutes

1. 🧠 **Recall — 2 min** — explain yesterday’s invariant/state without notes.
2. 🔎 **Recognize — 5 min** — identify the exact Sliding Window variant before coding.
3. 💻 **Implement — 20 min** — solve from scratch; no solution lookup.
4. 🧪 **Test — 5 min** — run today’s Vitest file and fix edge cases.
5. 🗣️ **Explain — 5 min** — explain correctness + time/space complexity.
6. 📝 **Remember — 2 min** — write one trigger phrase from memory.

## Progression

| Day | Exercise                                       | Difficulty | Variant                              | Mastery      | Memory trigger                                                |
| --- | ---------------------------------------------- | ---------- | ------------------------------------ | ------------ | ------------------------------------------------------------- |
| 01  | Maximum Sum Subarray of Size K                 | Easy       | Fixed window                         | L1 Recognize | `contiguous + exact size k -> fixed window`                   |
| 02  | Maximum Average Subarray                       | Easy       | Fixed window                         | L1→L2        | `average + exact size -> track window sum`                    |
| 03  | Longest Substring Without Repeating Characters | Medium     | Variable window + Set/Map            | L2 Implement | `longest valid contiguous range -> grow, shrink on violation` |
| 04  | Minimum Size Subarray Sum                      | Medium     | Variable window                      | L2→L3        | `positive numbers + minimum length satisfying threshold`      |
| 05  | Maximum Vowels in a Substring                  | Medium     | Fixed window + count state           | L3 Explain   | `exact length + count property -> rolling count`              |
| 06  | Permutation in String                          | Medium     | Fixed window + frequency             | L3→L4        | `permutation of pattern -> equal frequency profile`           |
| 07  | Find All Anagrams in a String                  | Medium     | Fixed window + frequency             | L4 Adapt     | `same as permutation, but collect every match`                |
| 08  | Longest Repeating Character Replacement        | Medium     | Variable window + dominant frequency | L4 Adapt     | `window size - most frequent <= replacements`                 |
| 09  | Fruit Into Baskets                             | Medium     | Variable window + at-most-K distinct | L4→L5        | `longest subarray with at most 2 types`                       |
| 10  | Minimum Window Substring — Boss Fight          | Hard       | Variable window + requirement counts | L5 Combine   | `cover all requirements -> shrink aggressively`               |

## The explanation test

A green test suite is **not enough**. Before marking a day complete, answer aloud:

- What does the current window represent?
- What makes the window valid or invalid?
- When does the right pointer move?
- When and why does the left pointer move?
- What state changes when an item enters/leaves?
- Why is each element processed only a small number of times?

## Spaced repetition

- **+1 day** — explain only, no code.
- **+3 days** — code without hints.
- **+7 days** — code with a 15-minute limit.
- **+14 days** — solve a variation or change the constraints.
- **+30 days** — identify the pattern/variant in under 60 seconds.

## Running this track

```bash
npm run practice -- sliding-window 1
npm run practice -- sliding-window 10
```
