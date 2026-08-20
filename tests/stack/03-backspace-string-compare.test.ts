import { describe, expect, it } from 'vitest';
import { backspaceCompare } from '../../src/challenges/stack/03-backspace-string-compare';
describe('03 — Backspace String Compare', () => { it.each([[['ab#c','ad#c'],true],[['ab##','c#d#'],true],[['a#c','b'],false],[['####',''],true]])('%j', ([s,t],e)=>expect(backspaceCompare(s,t)).toBe(e)); });
