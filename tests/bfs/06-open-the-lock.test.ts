import { describe, expect, it } from 'vitest';
import { openLock } from '../../src/challenges/bfs/06-open-the-lock';
describe('BFS 06 - openLock', () => {
  it('finds the fewest wheel turns', () => expect(openLock(['0201','0101','0102','1212','2002'],'0202')).toBe(6));
  it('handles target-at-start and blocked start', () => { expect(openLock([], '0000')).toBe(0); expect(openLock(['0000'], '8888')).toBe(-1); });
});
