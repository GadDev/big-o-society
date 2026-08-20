# 🪙 Greedy — 10-Day Mastery Track

Greedy algorithms make the **best safe local choice now** and never revisit it. The hard part is not coding—it is proving why the local choice cannot hurt the global answer.

Build this reflex:

> **local choice can permanently discard worse options -> Greedy**

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
| 01 | Best Time to Buy and Sell Stock II | Easy | Take every profitable rise | L1 Recognize | `unlimited transactions -> collect every positive adjacent gain` |
| 02 | Assign Cookies | Easy | Sort + smallest sufficient match | L1→L2 | `satisfy as many requests as possible -> give the smallest resource that works` |
| 03 | Jump Game | Medium | Farthest reachable frontier | L2 Implement | `only need to know whether current index is reachable and how far reach can extend` |
| 04 | Jump Game II | Medium | Greedy level frontier | L3 Explain | `minimum jumps -> treat current reachable range like a BFS layer` |
| 05 | Gas Station | Medium | Reset impossible prefixes | L3 Explain | `if a prefix goes negative, no start inside that failed prefix can work` |
| 06 | Non-overlapping Intervals | Medium | Earliest finish time | L3→L4 | `keep the interval that leaves the most room for future choices` |
| 07 | Partition Labels | Medium | Last occurrence frontier | L4 Adapt | `close a segment only when every character seen so far ends inside it` |
| 08 | Minimum Arrows to Burst Balloons | Medium | Interval stabbing | L4 Adapt | `one point can cover overlapping intervals -> shoot at the earliest possible end` |
| 09 | Merge Triplets to Form Target | Medium | Discard harmful candidates | L4→L5 | `ignore any candidate exceeding target; useful candidates can independently contribute coordinates` |
| 10 | Candy — Boss Fight | Hard | Two directional greedy constraints | L5 Combine | `local neighbor rules point in both directions -> satisfy each direction then combine` |

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
npm run practice -- greedy 1
npm run practice -- greedy 10
```
