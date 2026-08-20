import { describe, expect, it } from 'vitest';
import { isValidParentheses } from '../../src/challenges/stack/01-valid-parentheses';
describe('01 — Valid Parentheses', () => { it.each([['()',true],['()[]{}',true],['(]',false],['([{}])',true],['([)]',false],['',true]])('%s', (s,e)=>expect(isValidParentheses(s)).toBe(e)); });
