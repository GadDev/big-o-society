# Mission

DSA Pattern Master exists because "grind 200 random LeetCode problems" teaches you 200 answers and nothing you can reuse on problem 201.

The skill that actually transfers isn't "I've seen this exact problem before." It's **pattern recognition**: see a problem, recognize the shape, recall the template, implement it, and explain *why* it works. That's the loop this dojo trains, one small TypeScript exercise and one green Vitest suite at a time.

## What We Do

DSA Pattern Master is a self-contained training dojo, not a problem archive. Each pattern gets its own mastery track: a graded sequence of exercises (easy → hard), a `TRAINING.md` that states the reflex being built and the daily ritual, a `HINTS.md` with progressive hints that stop short of the answer, and a Vitest file per exercise that defines "done" without ever showing the solution.

No solutions are ever included. The tests are the only judge.

## Who We Serve

- **The learner (you)** — solving one exercise a day, explaining pointer/loop/state invariants out loud before touching a keyboard, and refusing to look up the answer even when stuck.
- **The reviewer (Claude, on request)** — reviews finished exercises like an interviewer: correctness → edge cases → complexity → reasoning → cleaner implementation. Never hands over a solution first; escalates through conceptual nudge → pseudocode → code only when explicitly asked.

## Target Audience

- **Anyone drilling DSA pattern recognition for interviews or general sharpness**, who wants graded, spaced-repetition practice instead of an unordered problem list.
- **Course students / conference demo audiences** learning what a small, spec-driven, AI-assisted TypeScript project looks like end to end — the domain is tight enough to build and explain live.

## What Success Looks Like

Given any new problem, you can name the pattern in under 60 seconds, implement the template from memory, and explain in one sentence why each pointer/window/stack move is safe — without having seen that exact problem before.

Also, a `npm run practice -- <pattern> <day>` command that actually exists and makes running the daily exercise painless.
