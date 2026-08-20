import { describe, expect, it } from 'vitest';
import { shortestPathBinaryMatrix } from '../../src/challenges/bfs/08-shortest-path-in-binary-matrix';
describe('BFS 08 - shortestPathBinaryMatrix', () => {
  it('uses diagonal movement', () => expect(shortestPathBinaryMatrix([[0,1],[1,0]])).toBe(2));
  it('handles blocked and single-cell grids', () => { expect(shortestPathBinaryMatrix([[1]])).toBe(-1); expect(shortestPathBinaryMatrix([[0]])).toBe(1); });
});
