import { describe, expect, it } from 'vitest';
import { largestRectangleArea } from '../../src/challenges/stack/09-largest-rectangle-histogram';
describe('09 — Largest Rectangle in Histogram', () => { it.each([[[2,1,5,6,2,3],10],[[2,4],4],[[1],1],[[0,0],0],[[2,2,2],6]])('%j',(a,e)=>expect(largestRectangleArea(a as number[])).toBe(e)); });
