import { describe, expect, it } from 'vitest'; import { solveNQueens } from '../../src/challenges/backtracking/09-n-queens';
describe('Backtracking 09 - solveNQueens',()=>{it('finds both n=4 boards',()=>expect(solveNQueens(4)).toHaveLength(2)); it('handles n=1',()=>expect(solveNQueens(1)).toEqual([['Q']]));});
