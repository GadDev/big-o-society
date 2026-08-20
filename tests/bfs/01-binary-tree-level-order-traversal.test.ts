import { describe, expect, it } from 'vitest';
import { levelOrder } from '../../src/challenges/bfs/01-binary-tree-level-order-traversal';
import { TreeNode } from '../../src/challenges/bfs/structures';
describe('BFS 01 - levelOrder', () => {
  it('groups values by depth', () => { const root=new TreeNode(3,new TreeNode(9),new TreeNode(20,new TreeNode(15),new TreeNode(7))); expect(levelOrder(root)).toEqual([[3],[9,20],[15,7]]); });
  it('handles empty and single trees', () => { expect(levelOrder(null)).toEqual([]); expect(levelOrder(new TreeNode(1))).toEqual([[1]]); });
});
