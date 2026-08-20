import { describe, expect, it } from 'vitest';
import { firstUniqueInStream } from '../../src/challenges/queue/04-first-unique-stream';
describe('04 — First Unique in Stream',()=>{it.each([[["a","a","b","c"],["a",null,"b","b"]],[["a","b","a","b","c"],["a","a","b",null,"c"]],[[],[]]])('%j',(a,e)=>expect(firstUniqueInStream(a as string[])).toEqual(e));});
