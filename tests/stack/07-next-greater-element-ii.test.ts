import { describe, expect, it } from 'vitest';
import { nextGreaterElements } from '../../src/challenges/stack/07-next-greater-element-ii';
describe('07 — Next Greater Element II', () => { it.each([[[1,2,1],[2,-1,2]],[[1,2,3,4,3],[2,3,4,-1,4]],[[5,4,3,2,1],[-1,5,5,5,5]],[[1],[-1]]])('%j',(a,e)=>expect(nextGreaterElements(a as number[])).toEqual(e)); });
