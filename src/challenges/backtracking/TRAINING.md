# 🎒 Backtracking — 10-Day Mastery Track

Backtracking is **choose → explore → undo**. Use it when you must enumerate possibilities while pruning invalid partial choices.

Build this reflex:

> **all combinations / all arrangements / choose then undo -> Backtracking**

## Daily ritual — 30–45 minutes

1. 🧠 **Recall — 2 min** — explain yesterday’s pattern/invariant without notes.
2. 🔎 **Recognize — 5 min** — identify the exact variant **before coding**.
3. 💻 **Implement — 20 min** — solve from scratch; no solution lookup.
4. 🧪 **Test — 5 min** — run today’s Vitest file and repair edge cases.
5. 🗣️ **Explain — 5 min** — explain correctness and time/space complexity.
6. 📝 **Remember — 2 min** — say the memory trigger from memory.

## Progression

| Day | Exercise | Difficulty | Skill | Mastery | Memory trigger |
|---|---|---|---|---|---|
| 01 | Subsets | Easy | Include/exclude choices | L1 Recognize | `all subsets -> at each element choose take or skip` |
| 02 | Permutations | Medium | Used-choice tracking | L2 Implement | `all orderings -> choose any unused item at each position` |
| 03 | Combinations | Medium | Start-index pruning | L2→L3 | `choose k from 1..n without order -> recurse only forward` |
| 04 | Combination Sum | Medium | Reusable choices | L3 Explain | `choices can repeat but order should not create duplicates -> recurse from current index` |
| 05 | Letter Combinations of a Phone Number | Medium | Decision tree expansion | L3 Explain | `each input symbol offers a small set of choices -> product-shaped search tree` |
| 06 | Generate Parentheses | Medium | Constraint pruning | L3→L4 | `build all sequences but prune as soon as closes exceed opens` |
| 07 | Word Search | Medium | Grid backtracking | L4 Adapt | `path cannot reuse a cell -> mark, recurse, then restore` |
| 08 | Palindrome Partitioning | Medium | Backtracking + validation | L4 Adapt | `split a string at many positions but only continue with valid palindrome pieces` |
| 09 | N-Queens | Hard | Constraint sets | L4→L5 | `place one queen per row while columns and diagonals stay conflict-free` |
| 10 | Sudoku Solver — Boss Fight | Hard | Constraint propagation + backtracking | L5 Combine | `pick an empty cell, try legal values, undo failures` |

## Graduation questions

A green test suite is not enough. Answer aloud:

- What is the state?
- What invariant remains true?
- Why is this move/choice/transition safe?
- What brute-force work did the pattern remove?
- When would this pattern **not** be valid?
- What are time and space complexity?

## Spaced repetition

- **+1 day** — explain without code.
- **+3 days** — recode without hints.
- **+7 days** — solve with a 15-minute limit.
- **+14 days** — solve a variation or changed constraint.
- **+30 days** — recognize the pattern/variant in under 60 seconds.

## Running this track

```bash
npm run practice -- backtracking 1
npm run practice -- backtracking 10
```
