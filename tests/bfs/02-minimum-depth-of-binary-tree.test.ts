import { describe, expect, it } from 'vitest';
import { minDepth } from '../../src/challenges/bfs/02-minimum-depth-of-binary-tree';
import { TreeNode } from '../../src/challenges/bfs/structures';
describe('BFS 02 - minDepth', () => {
  it('finds the nearest leaf', () => { const root=new TreeNode(3,new TreeNode(9),new TreeNode(20,new TreeNode(15),new TreeNode(7))); expect(minDepth(root)).toBe(2); });
  it('does not treat a missing child as a leaf', () => { const root=new TreeNode(1,null,new TreeNode(2,null,new TreeNode(3))); expect(minDepth(root)).toBe(3); expect(minDepth(null)).toBe(0); });
});
