import { describe, expect, it } from 'vitest';
import { dailyTemperatures } from '../../src/challenges/stack/06-daily-temperatures';
describe('06 — Daily Temperatures', () => { it.each([[[73,74,75,71,69,72,76,73],[1,1,4,2,1,1,0,0]],[[30,40,50,60],[1,1,1,0]],[[30,60,90],[1,1,0]],[[90,80,70],[0,0,0]]])('%j',(a,e)=>expect(dailyTemperatures(a as number[])).toEqual(e)); });
