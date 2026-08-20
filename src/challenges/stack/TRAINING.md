# 🧱 Stack — 10-Day Mastery Track

A stack remembers unfinished work in **last-in, first-out** order. Learn to see parentheses, undo-like behavior, and “nearest previous/next” questions as stack-shaped problems.

Build this reflex:

> **nested structure / undo / nearest unresolved item -> Stack**

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
| 01 | Valid Parentheses | Easy | Basic LIFO matching | L1 Recognize | `nested brackets -> latest opener must close first` |
| 02 | Remove Adjacent Duplicates | Easy | Stack as editable history | L1→L2 | `undo the latest character when a matching neighbor arrives` |
| 03 | Backspace String Compare | Easy | Stack simulation | L2 Implement | `backspace/undo behavior -> stack` |
| 04 | Min Stack | Medium | Stack + synchronized metadata | L2→L3 | `need normal stack operations plus instant minimum` |
| 05 | Evaluate Reverse Polish Notation | Medium | Operand stack | L3 Explain | `operator appears after its operands -> pop the latest two` |
| 06 | Daily Temperatures | Medium | Monotonic stack | L3→L4 | `next greater value to the right -> unresolved indices stack` |
| 07 | Next Greater Element II | Medium | Circular monotonic stack | L4 Adapt | `next greater + circular array -> monotonic stack + second pass` |
| 08 | Asteroid Collision | Medium | Stack as surviving history | L4 Adapt | `new item only conflicts with latest survivor` |
| 09 | Largest Rectangle in Histogram | Hard | Monotonic increasing stack | L4→L5 | `nearest smaller boundaries determine maximal width` |
| 10 | Basic Calculator — Boss Fight | Hard | Stack + parsing state | L5 Combine | `nested parentheses + deferred signs -> stack saved context` |

## The explanation test

A green test suite is **not graduation**. Also answer aloud:

- What does each pointer/stack/queue/recursive call represent?
- What invariant remains true after every operation?
- Why is the next move safe?
- What work gets permanently eliminated?
- What is the brute-force alternative?
- Why does this version meet the stated complexity target?

## Spaced repetition

- **+1 day** — explain without code.
- **+3 days** — recode without hints.
- **+7 days** — solve with a 15-minute limit.
- **+14 days** — solve a variation or changed constraint.
- **+30 days** — recognize the pattern/variant in under 60 seconds.

## Running this track

```bash
npm run practice -- stack 1
npm run practice -- stack 10
```
