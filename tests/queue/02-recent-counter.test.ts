import { describe, expect, it } from 'vitest';
import { RecentCounter } from '../../src/challenges/queue/02-recent-counter';
describe('02 — Recent Calls',()=>{it('expires old calls',()=>{const r=new RecentCounter();expect(r.ping(1)).toBe(1);expect(r.ping(100)).toBe(2);expect(r.ping(3001)).toBe(3);expect(r.ping(3002)).toBe(3);});});
