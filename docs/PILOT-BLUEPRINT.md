# Two Pointers Pilot — Product Blueprint

## 1. Pattern chapter = The Case File

Purpose: refresh the mental model before entering exercises.

The chapter teaches four sub-patterns:

- opposite ends
- read/write pointers
- backward merge
- freeze + two pointers

The one mandatory question:

> **Why is moving this pointer safe?**

## 2. Exercise = The Job

Each of the ten Jobs follows the same visual grammar:

- case/job number
- codename + technical title
- Heat + target window
- pattern hidden as `???`
- briefing
- pattern suspicion
- timer
- constraints/examples
- hints
- Evidence Board
- debrief
- Case Solved stamp

Consistency is intentional. The learner should spend cognitive effort on the DSA problem—not learning a new interface every day.

## 3. Tests = Evidence

For the pilot, Vitest remains the source of truth.

The browser UI is a dossier/checklist representation of the terminal result.

Future automation option:

```text
Vitest custom reporter
      ↓
public/test-results/tp-06.json
      ↓
VitePress EvidenceBoard reads result
      ↓
Exhibits clear automatically
```

Do that only if the manual pilot proves the Evidence Board is worth keeping.

## 4. Debrief = Understanding gate

A case cannot close until four pieces of evidence exist:

- why the learner recognized the pattern
- the invariant / safety argument
- time complexity
- space complexity

This prevents “tests passed” from becoming synonymous with “mastered.”

## 5. Spaced repetition = The Board

Every Job is a memory file.

State machine:

```text
OPEN
  ↓ solve
SOLVED · +1 due
  ↓ solid
+3 due
  ↓ solid
+7 due
  ↓ solid
+14 due
  ↓ solid
+30 due
  ↓ solid
MASTERED
```

Weak recall:

```text
grade 1–2 → reset to +1
grade 3   → repeat current interval
grade 4–5 → advance
```

## 6. Weakness score

The review schedule answers:

> “When should I see this again?”

Weakness answers:

> “Which solved things are still dangerous?”

Signals:

- wrong pattern recognition
- hints
- overtime
- weak reviews

This enables messages such as:

> **The Container Deal is due for +7-day review.**

> **The Reservoir is weak—schedule another attempt.**

> **The Cleanup is mastered.**

## 7. Why pilot on one pattern

If we generalize too early, we risk copying UX mistakes 14 times.

Two Pointers gives us enough variety to test the experience:

- easy opposite-end scan
- read/write compaction
- backward write
- proof-heavy pointer movement
- combination with sorting
- hard stateful two-pointer reasoning

If the interface works across these 10 Jobs, it is probably robust enough to become generic.
