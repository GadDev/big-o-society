import { describe, expect, it } from 'vitest';
import { asteroidCollision } from '../../src/challenges/stack/08-asteroid-collision';
describe('08 — Asteroid Collision', () => { it.each([[[5,10,-5],[5,10]],[[8,-8],[]],[[10,2,-5],[10]],[[-2,-1,1,2],[-2,-1,1,2]],[[1,-2,-2,-2],[-2,-2,-2]]])('%j',(a,e)=>expect(asteroidCollision(a as number[])).toEqual(e)); });
