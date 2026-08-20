import { describe, expect, it } from 'vitest';
import { removeAdjacentDuplicates } from '../../src/challenges/stack/02-remove-adjacent-duplicates';
describe('02 — Remove Adjacent Duplicates', () => { it.each([['abbaca','ca'],['azxxzy','ay'],['aaaa',''],['abc','abc'],['','']])('%s', (s,e)=>expect(removeAdjacentDuplicates(s)).toBe(e)); });
