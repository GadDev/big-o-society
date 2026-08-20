import { ListNode } from '../../src/challenges/fast-slow/list-node';
function list(values:number[]):ListNode|null{const dummy=new ListNode(0);let cur=dummy;for(const v of values){cur.next=new ListNode(v);cur=cur.next;}return dummy.next;}
import { describe, expect, it } from 'vitest';import { isPalindromeList } from '../../src/challenges/fast-slow/05-palindrome-linked-list';describe('05 — Palindrome List',()=>{it.each([[[1,2,2,1],true],[[1,2],false],[[1],true],[[1,2,3,2,1],true]])('%j',(a,e)=>expect(isPalindromeList(list(a as number[]))).toBe(e));});
