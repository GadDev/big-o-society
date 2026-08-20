import { describe, expect, it } from 'vitest';
import { findPeakElement } from '../../src/challenges/binary-search/04-find-peak-element';
describe('04 — Find Peak',()=>{
  it.each([[[1,2,3,1]],[[1,2,1,3,5,6,4]],[[1]],[[2,1]]])('%j',(nums)=>{
    const a=nums as number[];
    const i=findPeakElement(a);
    expect(i).toBeGreaterThanOrEqual(0);
    expect(i).toBeLessThan(a.length);
    expect(a[i]).toBeGreaterThan(i>0?a[i-1]:-Infinity);
    expect(a[i]).toBeGreaterThan(i<a.length-1?a[i+1]:-Infinity);
  });
});
