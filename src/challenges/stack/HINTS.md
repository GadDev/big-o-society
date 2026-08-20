# 🪜 Stack — Progressive Hints

Use hints in order. Spend **10–15 focused minutes** before opening the next one. No final implementations are included.

## Day 01 — Valid Parentheses

**Hint 1 — Recognition:** nested brackets -> latest opener must close first

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** What exactly does the top of the stack represent?

## Day 02 — Remove Adjacent Duplicates

**Hint 1 — Recognition:** undo the latest character when a matching neighbor arrives

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** Why is only the most recent unresolved character relevant?

## Day 03 — Backspace String Compare

**Hint 1 — Recognition:** backspace/undo behavior -> stack

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** What does a backspace do to the most recent surviving character?

## Day 04 — Min Stack

**Hint 1 — Recognition:** need normal stack operations plus instant minimum

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** What extra information must be saved at each push so getMin stays O(1)?

## Day 05 — Evaluate Reverse Polish Notation

**Hint 1 — Recognition:** operator appears after its operands -> pop the latest two

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** Why does operand order matter for subtraction and division?

## Day 06 — Daily Temperatures

**Hint 1 — Recognition:** next greater value to the right -> unresolved indices stack

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** Why can an index be permanently removed once a warmer day is found?

## Day 07 — Next Greater Element II

**Hint 1 — Recognition:** next greater + circular array -> monotonic stack + second pass

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** Why is scanning at most twice enough?

## Day 08 — Asteroid Collision

**Hint 1 — Recognition:** new item only conflicts with latest survivor

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** Which direction combinations can actually collide?

## Day 09 — Largest Rectangle in Histogram

**Hint 1 — Recognition:** nearest smaller boundaries determine maximal width

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** When a shorter bar arrives, why is it safe to finalize taller bars?

## Day 10 — Basic Calculator — Boss Fight

**Hint 1 — Recognition:** nested parentheses + deferred signs -> stack saved context

**Hint 2 — Structure:** Name the data/state that represents unfinished work or the current search/recursive frontier. Write the invariant in one sentence before coding.

**Hint 3 — Proof question:** What minimal state must be saved before entering a parenthesized expression?
