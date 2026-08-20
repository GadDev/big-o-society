import { describe, expect, it } from 'vitest';
import { MovingAverage } from '../../src/challenges/queue/03-moving-average';
describe('03 — Moving Average',()=>{it('tracks last k values',()=>{const m=new MovingAverage(3);expect(m.next(1)).toBeCloseTo(1);expect(m.next(10)).toBeCloseTo(5.5);expect(m.next(3)).toBeCloseTo(14/3);expect(m.next(5)).toBeCloseTo(6);});});
