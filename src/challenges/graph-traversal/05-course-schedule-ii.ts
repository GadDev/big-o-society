/**
 * Exercise 5 — Course Schedule II
 * Difficulty: Medium | Mastery: L3→L4
 * Skill: Topological ordering
 *
 * Problem:
 *   Each pair [course, prerequisite]. Return any order that finishes all courses, or [] if impossible.
 *
 * Goal: given `numCourses` and a list of `[course, prerequisite]` pairs,
 * return one valid order to take all courses, or `[]` if the prerequisites
 * contain a cycle.
 * Example: numCourses=4, prerequisites=[[1,0],[2,0],[3,1],[3,2]] ->
 *          an order such as [0,1,2,3] (0 before 1 and 2, both before 3);
 *          numCourses=2, prerequisites=[[1,0],[0,1]] -> [] (1 needs 0 and
 *          0 needs 1, a cycle).
 *
 * Recognition trigger: dependencies require an order where prerequisites appear first
 *
 * Before coding, say aloud:
 *   1. What clue points to Graph Traversal?
 *   2. What state/invariant must stay true after every move or recursive call?
 *
 * Critical explanation question:
 *   Why is the next choice/expansion/state transition safe, and what work does it eliminate?
 *
 * Complexity target:
 *   Time: O(V + E)
 *   Space: O(V + E)
 */

export function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  // TODO: Each pair [course, prerequisite]. Return any order that finishes all courses, or [] if impossible.
  throw new Error('Not implemented');
}
