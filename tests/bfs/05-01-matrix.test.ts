import { describe, expect, it } from 'vitest';
import { updateMatrix } from '../../src/challenges/bfs/05-01-matrix';
describe('BFS 05 - updateMatrix', () => {
  it('computes nearest zero distances', () => expect(updateMatrix([[0,0,0],[0,1,0],[1,1,1]])).toEqual([[0,0,0],[0,1,0],[1,2,1]]));
  it('handles all-zero input', () => expect(updateMatrix([[0,0],[0,0]])).toEqual([[0,0],[0,0]]));
});
