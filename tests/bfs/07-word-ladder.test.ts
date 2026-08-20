import { describe, expect, it } from 'vitest';
import { ladderLength } from '../../src/challenges/bfs/07-word-ladder';
describe('BFS 07 - ladderLength', () => {
  it('finds shortest transformation length', () => expect(ladderLength('hit','cog',['hot','dot','dog','lot','log','cog'])).toBe(5));
  it('returns 0 when end cannot be reached', () => expect(ladderLength('hit','cog',['hot','dot','dog','lot','log'])).toBe(0));
});
