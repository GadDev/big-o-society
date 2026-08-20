import { describe, expect, it } from 'vitest'; import { permute } from '../../src/challenges/backtracking/02-permutations';
const norm=(x:number[][])=>x.map(a=>a.join(',')).sort(); describe('Backtracking 02 - permute',()=>{it('returns all permutations',()=>expect(norm(permute([1,2,3]))).toHaveLength(6)); it('handles one value',()=>expect(permute([7])).toEqual([[7]]));});
