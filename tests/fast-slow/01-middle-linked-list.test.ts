import { ListNode } from '../../src/challenges/fast-slow/list-node';
function list(values:number[]):ListNode|null{const dummy=new ListNode(0);let cur=dummy;for(const v of values){cur.next=new ListNode(v);cur=cur.next;}return dummy.next;}
import { describe, expect, it } from 'vitest';import { middleNode } from '../../src/challenges/fast-slow/01-middle-linked-list';describe('01 — Middle Node',()=>{it.each([[[1,2,3,4,5],3],[[1,2,3,4,5,6],4],[[1],1]])('%j',(a,e)=>expect(middleNode(list(a as number[]))?.val).toBe(e));});
