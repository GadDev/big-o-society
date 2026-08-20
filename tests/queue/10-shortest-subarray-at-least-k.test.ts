import { describe, expect, it } from 'vitest';
import { shortestSubarray } from '../../src/challenges/queue/10-shortest-subarray-at-least-k';
describe('10 — Shortest Subarray >= K',()=>{it.each([[[1],1,1],[[1,2],4,-1],[[2,-1,2],3,3],[[84,-37,32,40,95],167,3],[[17,85,93,-45,-21],150,2]])('%j',(nums,k,e)=>expect(shortestSubarray(nums as number[],k as number)).toBe(e));});
