export class GraphNode {
	constructor(
		public val: number,
		public neighbors: GraphNode[] = [],
	) {}
}
