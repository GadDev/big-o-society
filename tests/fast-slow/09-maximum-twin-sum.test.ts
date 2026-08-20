import { ListNode } from '../../src/challenges/fast-slow/list-node';
function list(values:number[]):ListNode|null{const dummy=new ListNode(0);let cur=dummy;for(const v of values){cur.next=new ListNode(v);cur=cur.next;}return dummy.next;}
import { describe, expect, it } from 'vitest';import { pairSum } from '../../src/challenges/fast-slow/09-maximum-twin-sum';describe('09 — Maximum Twin Sum',()=>{it.each([[[5,4,2,1],6],[[4,2,2,3],7],[[1,100000],100001]])('%j',(a,e)=>expect(pairSum(list(a as number[]))).toBe(e));});
