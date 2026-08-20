import { describe, expect, it } from 'vitest';
import { shortestPathWithElimination } from '../../src/challenges/bfs/10-shortest-path-with-obstacle-eliminations';
describe('BFS 10 - shortestPathWithElimination', () => {
  it('tracks remaining eliminations as part of state', () => expect(shortestPathWithElimination([[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]],1)).toBe(6));
  it('returns -1 when resource is insufficient', () => expect(shortestPathWithElimination([[0,1,1],[1,1,1],[1,0,0]],1)).toBe(-1));
});
