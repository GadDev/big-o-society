import { describe, expect, it } from 'vitest';
import { MinStack } from '../../src/challenges/stack/04-min-stack';
describe('04 — Min Stack', () => { it('keeps the minimum synchronized', () => { const s=new MinStack(); s.push(-2); s.push(0); s.push(-3); expect(s.getMin()).toBe(-3); s.pop(); expect(s.top()).toBe(0); expect(s.getMin()).toBe(-2); }); it('handles duplicate minima',()=>{const s=new MinStack();s.push(2);s.push(1);s.push(1);expect(s.getMin()).toBe(1);s.pop();expect(s.getMin()).toBe(1);}); });
