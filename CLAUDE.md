# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A personal training dojo for daily data-structures-and-algorithms pattern recognition, not a product codebase. The dojo is organized into 14 pattern **mastery tracks** (see README.md for the cycle overview, `CURRICULUM.md` for the full 10-exercise-per-pattern breakdown). Each exercise is a small TypeScript function with a Vitest spec that must go green, and no solutions are ever included in the repo — the tests are the only judge.

Read `specs/mission.md`, `specs/roadmap.md`, and `specs/techstack.md` before making structural changes — they're the living source of truth for intent, current progress, and conventions, and are kept more up to date than this file for day-to-day state (e.g. which pattern tracks are actually built out yet). `specs/roadmap.md` in particular tracks what's done vs. still a gap.

## Commands

```bash
npm install       # install deps
npm test          # vitest in watch mode (default daily workflow)
npm run test:run  # vitest single run (CI-style, no watch)
npm run test:watch
npm run practice -- <pattern> <day>   # e.g. npm run practice -- two-pointers 6
npm run practice -- <pattern>         # lists exercises (and their day numbers) for that pattern
npm run practice                      # lists all pattern track names
npm run dev        # vite dev server for index.html/src/main.ts (rarely needed; this is not a UI project)
```

There's also a dedicated `npm run test:<pattern>` script per built-out track (e.g. `npm run test:two-pointers`) — check `package.json` for the current list, since it grows as new tracks are added.

Run a single test file: `npx vitest run tests/two-pointers/01-valid-palindrome.test.ts`
Run tests matching a name: `npx vitest run -t "palindrome"`

**Linting/formatting:** Biome (`biome.json`) is configured for this repo but has no `npm run` script wired up yet — invoke it directly: `npx biome check .` / `npx biome format --write .`.

**Type checking:** via `tsc --noEmit` (strict mode is on in `tsconfig.json`) — no dedicated npm script; invoke `npx tsc --noEmit` directly if needed.

## Architecture / workflow

- `src/challenges/<pattern-name>/NN-exercise-name.ts` — one file per exercise, numbered by day within its pattern track (e.g. `src/challenges/two-pointers/01-valid-palindrome.ts`). Each starts as a stub that `throw new Error('Not implemented')`, with a doc comment stating the goal, constraints, an O() bound, and recognition questions to answer before coding. The task is to implement the stub, not to redesign the file.
- `tests/<pattern-name>/NN-exercise-name.test.ts` — mirrors `src/challenges/<pattern-name>/` 1:1 by filename and is the acceptance criteria for that exercise. Tests should generally be treated as fixed; the goal is making them pass, not editing them to fit an implementation.
- `src/challenges/<pattern-name>/TRAINING.md` — that track's daily ritual, progression table, and spaced-repetition schedule (+1/+3/+7/+14/+30 days).
- `src/challenges/<pattern-name>/HINTS.md` — progressive hints per exercise (conceptual nudge → pseudocode → code). Never contains full solutions; don't add one here even if asked to help — escalate through hint levels instead (see house rule below).
- `src/patterns/<pattern-name>/README.md` (+ `illustration.png`) — a short "pattern refresh" chapter to read *before* an exercise: the idea in plain English, recognition questions, a generic (non-solving) TypeScript skeleton, common mistakes, and a recall drill. Not a solution source.
- `src/utils/` — reserved for shared helpers extracted after repeating the cycle; currently empty, don't assume any shared infrastructure exists there yet.
- `CURRICULUM.md` — the master 14-pattern × 10-exercise curriculum (name, difficulty, skill) for the whole project. Only some tracks are actually implemented under `src/challenges/`/`tests/` so far; check `specs/roadmap.md` for which ones, and match its structure/tone exactly when building out a new track.
- `scripts/practice.mjs` — implementation of `npm run practice`; reads directory names under `tests/` to discover pattern tracks and exercise days.
- `src/main.ts` / `index.html` are a placeholder landing page for `npm run dev`; they are not the focus of this project and don't need to track challenge progress.
- README.md gives the human-facing cycle overview, daily ritual, and Day 1 quick start; `specs/` gives the fuller project-level rationale. Keep new pattern/exercise work consistent with both.

## House rule for Claude as reviewer

When reviewing a finished exercise (on request), act like an interviewer, not an answer key: correctness → edge cases → complexity → reasoning → cleaner implementation, in that order. Never hand over a full solution first — escalate through a conceptual nudge → pseudocode → code, and only go further when explicitly asked. This applies to `HINTS.md` entries too if asked to add or extend them.
