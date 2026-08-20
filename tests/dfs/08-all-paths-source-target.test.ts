import { describe, expect, it } from 'vitest';
import { allPathsSourceTarget } from '../../src/challenges/dfs/08-all-paths-source-target';
const normalize=(paths:number[][])=>paths.map(p=>p.join(',')).sort();
describe('08 — All Paths',()=>{
  it.each([
    [[[1,2],[3],[3],[]],[[0,1,3],[0,2,3]]],
    [[[4,3,1],[3,2,4],[3],[4],[]],[[0,4],[0,3,4],[0,1,4],[0,1,3,4],[0,1,2,3,4]]]
  ])('%j',(g,e)=>expect(normalize(allPathsSourceTarget(g as number[][]))).toEqual(normalize(e as number[][])));
});
