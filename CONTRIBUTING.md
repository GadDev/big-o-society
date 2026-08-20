# Contributing

This repo is a personal training dojo for daily DSA pattern practice — not a product codebase. Contributions are welcome (new exercises, hint improvements, bug fixes in the runner scripts), but the goal is to keep every exercise small and single-purpose.

## Setup

```bash
npm install
npm test
```

## Adding or changing an exercise

- Follow the existing structure: one file per problem under `src/challenges/<pattern>/`, mirrored 1:1 by filename under `tests/<pattern>/`.
- Keep the stub style: export the function under test starting as `throw new Error('Not implemented')`, with a doc comment stating the O() constraint and a TODO hint on the approach.
- Tests are the acceptance criteria — don't edit an existing test to fit an implementation; if a test looks wrong, open an issue/PR discussing it first.
- Read `README.md` and `CURRICULUM.md` before adding a new pattern track so it stays consistent with the 14-pattern cycle and daily ritual.

## Running tests

```bash
npm test                      # watch mode
npm run test:run              # single run, CI-style
npx vitest run tests/twoPointers.test.ts   # one file
npx vitest run -t "palindrome"             # by test name
npx tsc --noEmit               # type check (strict mode)
```

## Submitting changes

1. Fork/branch from `main`.
2. Make sure `npm run test:run` and `npx tsc --noEmit` pass.
3. If your change is user-facing (new exercise, behavior change, docs), add a changeset:
   ```bash
   npx changeset
   ```
   See `RELEASING.md` for how changesets flow into a release.
4. Open a pull request describing the change and why.

By participating in this project you agree to abide by the [Code of Conduct](CODE_OF_CONDUCT.md).
