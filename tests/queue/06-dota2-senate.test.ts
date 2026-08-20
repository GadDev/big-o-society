import { describe, expect, it } from 'vitest';
import { predictPartyVictory } from '../../src/challenges/queue/06-dota2-senate';
describe('06 — Dota2 Senate',()=>{it.each([['RD','Radiant'],['RDD','Dire'],['RRDDD','Radiant'],['DDRRR','Dire']])('%s',(s,e)=>expect(predictPartyVictory(s)).toBe(e));});
