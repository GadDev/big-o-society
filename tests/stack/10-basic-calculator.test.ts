import { describe, expect, it } from 'vitest';
import { calculate } from '../../src/challenges/stack/10-basic-calculator';
describe('10 — Basic Calculator', () => { it.each([['1 + 1',2],[' 2-1 + 2 ',3],['(1+(4+5+2)-3)+(6+8)',23],['1-(     -2)',3],['-(3+(4+5))',-12]])('%s',(s,e)=>expect(calculate(s)).toBe(e)); });
