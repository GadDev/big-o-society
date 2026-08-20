# ⚔️ Hash Map — 10-Day Mastery Track

The goal is not to memorize ten answers. Build this reflex:

> **When I need to remember what I have seen, count occurrences, or find a complement quickly, I should consider a Hash Map / Set.**

You progress from simple “have I seen this?” thinking to combining maps with other patterns:

**Contains Duplicate → Two Sum → Valid Anagram → First Unique Character → Group Anagrams → Top K Frequent → Longest Consecutive Sequence → Subarray Sum Equals K → Isomorphic Strings → Max Points on a Line 👹**

Memory reflex:

“Need to remember, count, group, or find something already seen → Hash Map / Set.”

## Daily ritual — 30–45 minutes

1. 🧠 **Recall — 2 min** — explain yesterday’s invariant/state without notes.
2. 🔎 **Recognize — 5 min** — identify the exact Hash Map variant before coding.
3. 💻 **Implement — 20 min** — solve from scratch; no solution lookup.
4. 🧪 **Test — 5 min** — run today’s Vitest file and fix edge cases.
5. 🗣️ **Explain — 5 min** — explain correctness + time/space complexity.
6. 📝 **Remember — 2 min** — write one trigger phrase from memory.

## Progression

| Day | Exercise | Difficulty | Variant | Mastery | Memory trigger |
|---|---|---|---|---|---|
| 01 | Contains Duplicate | Easy | Set membership | L1 Recognize | `seen before -> Set` |
| 02 | Two Sum | Easy | Complement lookup | L1→L2 | `target - current -> lookup` |
| 03 | Valid Anagram | Easy | Frequency counting | L2 Implement | `same items + same counts -> frequency map` |
| 04 | First Unique Character | Easy | Count then scan | L2→L3 | `need first unique -> count, then preserve order` |
| 05 | Group Anagrams | Medium | Canonical key grouping | L3 Explain | `same signature -> same bucket` |
| 06 | Top K Frequent Elements | Medium | Frequency map + ranking | L3→L4 | `count first, rank second` |
| 07 | Longest Consecutive Sequence | Medium | Set + sequence starts | L4 Adapt | `only grow from sequence starts` |
| 08 | Subarray Sum Equals K | Medium | Prefix sum + frequency map | L4→L5 | `prefix difference = target` |
| 09 | Isomorphic Strings | Medium | Bidirectional mapping | L4 Adapt | `one-to-one mapping -> two directions` |
| 10 | Max Points on a Line — Boss Fight | Hard | Anchor + normalized slope map | L5 Combine | `same anchor + same normalized slope -> same line` |

## The explanation test

A green test suite is **not enough**. Before marking a day complete, answer aloud:

- What exactly is the key?
- What exactly is the value?
- Why does storing past information eliminate repeated work?
- Do I need a Map or only a Set?
- What collisions/duplicates must I handle?
- What are time and auxiliary-space complexities?

## Spaced repetition

- **+1 day** — explain only, no code.
- **+3 days** — code without hints.
- **+7 days** — code with a 15-minute limit.
- **+14 days** — solve a variation or change the constraints.
- **+30 days** — identify the pattern/variant in under 60 seconds.

## Running this track

```bash
npm run practice -- hash-map 1
npm run practice -- hash-map 10
```
