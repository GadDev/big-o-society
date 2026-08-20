import { describe, expect, it } from 'vitest';
import { evalRPN } from '../../src/challenges/stack/05-evaluate-rpn';
describe('05 — Evaluate RPN', () => { it.each([[["2","1","+","3","*"],9],[["4","13","5","/","+"],6],[["10","6","9","3","+","-11","*","/","*","17","+","5","+"],22]])('%j', (tokens,e)=>expect(evalRPN(tokens as string[])).toBe(e)); });
