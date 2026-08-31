/**
 * Exercise 08 — Asteroid Collision
 * Difficulty: Medium | Mastery: L4 Adapt
 * Skill: Stack as surviving history
 *
 * Goal: given `asteroids` where each value's sign is direction (positive =
 * right, negative = left) and magnitude is size, simulate collisions
 * (smaller explodes, equal both explode) and return the surviving asteroids.
 * Example: [5,10,-5] -> [5,10] (10 moving right meets -5 moving left and destroys it);
 *          [8,-8] -> [] (equal-sized head-on collision destroys both);
 *          [-2,-1,1,2] -> [-2,-1,1,2] (no pair is moving toward each other, so nothing collides).
 *
 * Recognition trigger: new item only conflicts with latest survivor
 *
 * Before coding, say aloud:
 *   1. Why does this problem suggest Stack?
 *   2. What invariant/state will stay true while I scan or recurse?
 *
 * Critical explanation question:
 *   Which direction combinations can actually collide?
 *
 * Complexity target:
 *   Time: O(n)
 *   Space: O(n)
 */

export function asteroidCollision(asteroids: number[]): number[] {
  // TODO: Return the asteroids remaining after all collisions resolve.
  throw new Error('Not implemented');
}
