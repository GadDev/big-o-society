import { describe, expect, it } from 'vitest';
import { numIslandsBfs } from '../../src/challenges/bfs/03-number-of-islands-with-bfs';
describe('BFS 03 - numIslandsBfs', () => {
  it('counts disconnected islands', () => { const g=[['1','1','0','0'],['1','0','0','1'],['0','0','1','1']]; expect(numIslandsBfs(g)).toBe(2); });
  it('handles no land', () => expect(numIslandsBfs([['0','0'],['0','0']])).toBe(0));
});
