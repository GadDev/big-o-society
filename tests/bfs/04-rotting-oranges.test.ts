import { describe, expect, it } from 'vitest';
import { orangesRotting } from '../../src/challenges/bfs/04-rotting-oranges';
describe('BFS 04 - orangesRotting', () => {
  it('spreads all sources simultaneously', () => expect(orangesRotting([[2,1,1],[1,1,0],[0,1,1]])).toBe(4));
  it('detects impossible and already-finished cases', () => { expect(orangesRotting([[2,1,1],[0,1,1],[1,0,1]])).toBe(-1); expect(orangesRotting([[0,2]])).toBe(0); });
});
