import { describe, expect, it } from 'vitest';
import { nearestExit } from '../../src/challenges/bfs/09-nearest-exit-from-entrance';
describe('BFS 09 - nearestExit', () => {
  it('does not count entrance itself as an exit', () => expect(nearestExit([['+','+','.','+'],['.','.','.','+'],['+','+','+','.']], [1,2])).toBe(1));
  it('returns -1 when enclosed', () => expect(nearestExit([['+','+','+'],['.','.','.'],['+','+','+']], [1,0])).toBe(2));
});
