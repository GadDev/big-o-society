# Tech Stack

Deliberately minimal — this is a training dojo, not a product. The stack exists to make one loop fast: write a function, run a test, get a pass/fail.

## Language & runtime
- **TypeScript** (`^5.9`), strict mode on (`tsconfig.json`: `strict: true`, ESNext modules, bundler resolution, `noEmit` — type-checking only, no build output from `tsc`).
- **Node.js** via `type: module` (ESM throughout).

## Build / dev
- **Vite** (`^7.1`) — dev server for `index.html` / `src/main.ts`. This is a placeholder landing page, not the point of the project; `npm run dev` is rarely needed day to day.

## Testing
- **Vitest** (`^3.2`) with `globals: true` and `environment: 'node'` (`vite.config.ts`) — no DOM, no browser APIs needed for pure algorithm exercises.
- One test file per exercise, mirroring `src/challenges/**` 1:1 by filename under `tests/**`. Tests are the spec; they are not meant to be edited to fit an implementation.

## Linting / formatting
- **Biome** (`2.5.9`) — single tool for both lint and format (`biome.json`). Tabs, double quotes, `organizeImports` on, recommended rule preset. No ESLint/Prettier.

## Layout conventions
- `src/challenges/<pattern-name>/NN-exercise-name.ts` — one exercise per file, numbered by day within its pattern track, each starting as a stub (`throw new Error('Not implemented')`) with a doc comment stating the goal, constraints, and recognition questions to answer before coding.
- `src/challenges/<pattern-name>/TRAINING.md` — the mastery track for that pattern: daily ritual, progression table, spaced-repetition schedule, and the "explanation test" checklist.
- `src/challenges/<pattern-name>/HINTS.md` — progressive hints (conceptual nudge → pseudocode → code) per exercise, deliberately not the solution.
- `tests/<pattern-name>/NN-exercise-name.test.ts` — the corresponding Vitest spec.
- `specs/` — project-level docs (this file, `mission.md`, `roadmap.md`) — not read by any tooling, informational only.

## Explicitly not used
No frameworks, no UI library, no state management, no backend, no database. `src/main.ts`/`index.html` are the only non-test, non-challenge code, and stay minimal on purpose.
