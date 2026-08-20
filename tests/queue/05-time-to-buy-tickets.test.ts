import { describe, expect, it } from 'vitest';
import { timeRequiredToBuy } from '../../src/challenges/queue/05-time-to-buy-tickets';
describe('05 — Time Needed to Buy Tickets',()=>{it.each([[[2,3,2],2,6],[[5,1,1,1],0,8],[[1],0,1]])('%j',(tickets,k,e)=>expect(timeRequiredToBuy(tickets as number[],k as number)).toBe(e));});
