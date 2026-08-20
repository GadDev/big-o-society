# Roadmap

## Done
- Project scaffold: TypeScript + Vite + Vitest + Biome, strict mode, ESM.
- **All 14 pattern mastery tracks built** (`src/challenges/<pattern>/`, `tests/<pattern>/`): 10 graded exercises each (Easy → Hard), each with problem statement, constraints, recognition questions, and a matching Vitest spec. Legacy single-file Day 1 (`src/challenges/twoPointers.ts`) has been retired in favor of the `two-pointers/` track.
- `TRAINING.md` + `HINTS.md` per track: daily ritual, progression table, spaced-repetition schedule (Day +1 / +3 / +7 / +14 / +30), progressive hints, no full solutions.
- `npm run practice -- <pattern> <day>` implemented (`scripts/practice.mjs`); also lists patterns/days when called with fewer args.
- Per-track `npm run test:<pattern>` scripts in `package.json`.
- `src/patterns/<pattern>/README.md` pattern-refresh chapters (+ illustrations) for all 14 patterns.
- Docs site: VitePress under `docs/` (`docs:dev`/`docs:build`/`docs:preview`), deployed to GitHub Pages via `.github/workflows/deploy-docs.yml`, with `base` correctly set for the project-page path.
- Release automation: Changesets (`changeset`/`version` scripts) + `.github/workflows/release.yml` on push to `main`. The release job no longer runs the exercise test suite — it can't pass release CI while any of the 140 daily exercises are still unimplemented stubs by design, so tests stay a local/manual-CI concern instead.
- House rule established: reviewer never gives the final solution first — code + reasoning is reviewed like an interview (correctness → edge cases → complexity → reasoning → cleaner implementation).

## In progress / gaps to close
- `src/challenges/bfs/structures.ts` and `src/challenges/dfs/structures.ts` both define a `TreeNode` (and `dfs/structures.ts` also a `GraphNode`) with incompatible constructor signatures — duplicated instead of shared via `src/utils/`. Needs consolidating into one canonical, backward-compatible shape.
- `src/patterns/.vitepress/` is a stray empty directory left over from before docs moved to `docs/` — safe to delete once confirmed nothing references it.
- `docs/.vitepress/config.example.ts` is an unused template sitting next to the real `config.ts`; decide whether to keep it as a reference or delete it.

## Later
- Second pass through the 14-pattern cycle with harder variants per pattern (per README: "same weapons, nastier monsters").
- Weekly boss-fight tooling: a script that randomly samples 3 completed exercises across tracks for the 60-second pattern-naming drill, rather than doing it manually.
- Revisit whether `src/main.ts` / `index.html` should ever surface progress (e.g. which days are green) or stay a static placeholder — no decision made yet.
