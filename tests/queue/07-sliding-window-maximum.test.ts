import { describe, expect, it } from 'vitest';
import { maxSlidingWindow } from '../../src/challenges/queue/07-sliding-window-maximum';
describe('07 — Sliding Window Maximum',()=>{it.each([[[1,3,-1,-3,5,3,6,7],3,[3,3,5,5,6,7]],[[1],1,[1]],[[9,11],2,[11]],[[4,-2],1,[4,-2]]])('%j',(nums,k,e)=>expect(maxSlidingWindow(nums as number[],k as number)).toEqual(e));});
