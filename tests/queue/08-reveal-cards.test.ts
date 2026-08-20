import { describe, expect, it } from 'vitest';
import { deckRevealedIncreasing } from '../../src/challenges/queue/08-reveal-cards';
function reveal(deck:number[]):number[]{const q=[...deck];const out:number[]=[];while(q.length){out.push(q.shift()!);if(q.length)q.push(q.shift()!);}return out;}
describe('08 — Reveal Cards',()=>{it.each([[[17,13,11,2,3,5,7],[2,3,5,7,11,13,17]],[[1,1000],[1,1000]],[[5],[5]]])('%j',(deck,expectedReveal)=>{const arranged=deckRevealedIncreasing(deck as number[]);expect(reveal(arranged)).toEqual(expectedReveal);expect([...arranged].sort((a,b)=>a-b)).toEqual([...(deck as number[])].sort((a,b)=>a-b));});});
