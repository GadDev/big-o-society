import { describe, expect, it } from 'vitest';
import { ArrayQueue } from '../../src/challenges/queue/01-build-array-queue';
describe('01 — Build an Array Queue',()=>{it('is FIFO',()=>{const q=new ArrayQueue<number>();expect(q.isEmpty()).toBe(true);q.enqueue(10);q.enqueue(20);q.enqueue(30);expect(q.peek()).toBe(10);expect(q.size()).toBe(3);expect(q.dequeue()).toBe(10);expect(q.dequeue()).toBe(20);expect(q.size()).toBe(1);expect(q.dequeue()).toBe(30);expect(q.dequeue()).toBeUndefined();expect(q.isEmpty()).toBe(true);});});
