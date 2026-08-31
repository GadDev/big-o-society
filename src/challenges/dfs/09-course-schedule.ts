/**
 * Exercise 09 — Course Schedule
 * Difficulty: Medium | Mastery: L4→L5
 * Skill: DFS cycle detection
 *
 * Goal: given `numCourses` and a list of [course, prerequisite] pairs, return
 * true if all courses can be finished (i.e. the prerequisite graph has no cycle).
 * Example: numCourses=2, prerequisites=[[1,0]] -> true (take 0 then 1);
 *          numCourses=2, prerequisites=[[1,0],[0,1]] -> false (0 needs 1 and 1 needs 0);
 *          numCourses=4, prerequisites=[[1,0],[2,1],[3,2]] -> true (a simple chain).
 *
 * Recognition trigger: dependency graph valid only if no active recursion cycle
 *
 * Before coding, say aloud:
 *   1. Why does this problem suggest Depth-First Search (DFS)?
 *   2. What invariant/state will stay true while I scan or recurse?
 *
 * Critical explanation question:
 *   Why are “visiting” and “fully visited” different states?
 *
 * Complexity target:
 *   Time: O(V + E)
 *   Space: O(V + E)
 */

export function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  // TODO: Return whether all courses can be completed given prerequisite edges; reject dependency cycles.
  throw new Error('Not implemented');
}
