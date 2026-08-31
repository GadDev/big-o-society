/**
 * Exercise 07 — Clone Graph
 * Difficulty: Medium | Mastery: L4 Adapt
 * Skill: Graph DFS + map
 *
 * Goal: given a reference node of a connected undirected graph, return a deep
 * clone of the whole graph (new node objects, same values, same neighbor
 * relationships, cycles preserved).
 * Example: nodes 1-2-3-4 wired as a cycle (1↔2, 2↔3, 3↔4, 4↔1) -> a fully
 *          separate set of nodes with matching values and the same cycle;
 *          null -> null (nothing to clone).
 *
 * Recognition trigger: cycles mean cloned nodes must be remembered before recursing
 *
 * Before coding, say aloud:
 *   1. Why does this problem suggest Depth-First Search (DFS)?
 *   2. What invariant/state will stay true while I scan or recurse?
 *
 * Critical explanation question:
 *   Why must the clone be stored before exploring neighbors?
 *
 * Complexity target:
 *   Time: O(V + E)
 *   Space: O(V)
 */

import { GraphNode } from './structures';
export { GraphNode } from './structures';

export function cloneGraph(node: GraphNode | null): GraphNode | null {
  // TODO: Deep-clone a connected undirected graph, preserving cycles and neighbor relationships.
  throw new Error('Not implemented');
}
