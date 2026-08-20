import { describe, expect, it } from 'vitest';
import { shortestPathBinaryMatrix } from '../../src/challenges/queue/09-shortest-path-binary-matrix';
describe('09 — Shortest Path Binary Matrix',()=>{it.each([[[[0,1],[1,0]],2],[[[0,0,0],[1,1,0],[1,1,0]],4],[[[1]],-1],[[[0]],1]])('%j',(grid,e)=>expect(shortestPathBinaryMatrix(grid as number[][])).toBe(e));});
