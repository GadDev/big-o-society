export type PatternMeta = {
  slug: string
  title: string
  chapter: number
  tagline: string
  description: string
  image: string
  href: string
}

export const patterns: PatternMeta[] = [
  {
    slug: 'two-pointers',
    title: 'Two Pointers',
    chapter: 1,
    tagline: "Opposite ends. One answer.",
    description: "Move from both ends and eliminate impossible choices.",
    image: '/patterns/two-pointers.webp',
    href: '/patterns/two-pointers'
  },
  {
    slug: 'hash-map',
    title: 'Hash Map',
    chapter: 2,
    tagline: "Remember. Count. Lookup.",
    description: "Trade memory for instant recall.",
    image: '/patterns/hash-map.webp',
    href: '/patterns/hash-map'
  },
  {
    slug: 'sliding-window',
    title: 'Sliding Window',
    chapter: 3,
    tagline: "Keep the range moving.",
    description: "Maintain a living range instead of starting over.",
    image: '/patterns/sliding-window.webp',
    href: '/patterns/sliding-window'
  },
  {
    slug: 'prefix-sum',
    title: 'Prefix Sum',
    chapter: 4,
    tagline: "The total so far.",
    description: "Store the past so a range becomes a subtraction.",
    image: '/patterns/prefix-sum.webp',
    href: '/patterns/prefix-sum'
  },
  {
    slug: 'stack',
    title: 'Stack',
    chapter: 5,
    tagline: "Last in. First out.",
    description: "The latest unresolved thing gets handled first.",
    image: '/patterns/stack.webp',
    href: '/patterns/stack'
  },
  {
    slug: 'queue',
    title: 'Queue',
    chapter: 6,
    tagline: "First in. First out.",
    description: "Process work in the order it becomes ready.",
    image: '/patterns/queue.webp',
    href: '/patterns/queue'
  },
  {
    slug: 'binary-search',
    title: 'Binary Search',
    chapter: 7,
    tagline: "Cut the noise.",
    description: "Use order to throw away half the search space.",
    image: '/patterns/binary-search.webp',
    href: '/patterns/binary-search'
  },
  {
    slug: 'fast-slow',
    title: 'Fast & Slow',
    chapter: 8,
    tagline: "Find the middle. Catch the cycle.",
    description: "Two travelers, one path, different speeds.",
    image: '/patterns/fast-slow.webp',
    href: '/patterns/fast-slow'
  },
  {
    slug: 'dfs',
    title: 'DFS',
    chapter: 9,
    tagline: "Go deep first.",
    description: "Follow one path to the end before coming back.",
    image: '/patterns/dfs.webp',
    href: '/patterns/dfs'
  },
  {
    slug: 'bfs',
    title: 'BFS',
    chapter: 10,
    tagline: "Explore level by level.",
    description: "The nearest layer gets handled first.",
    image: '/patterns/bfs.webp',
    href: '/patterns/bfs'
  },
  {
    slug: 'backtracking',
    title: 'Backtracking',
    chapter: 11,
    tagline: "Choose. Explore. Undo.",
    description: "Try a path, erase the mistake, try another.",
    image: '/patterns/backtracking.webp',
    href: '/patterns/backtracking'
  },
  {
    slug: 'greedy',
    title: 'Greedy',
    chapter: 12,
    tagline: "Take the best safe move.",
    description: "Commit locally only when the choice can be proved safe.",
    image: '/patterns/greedy.webp',
    href: '/patterns/greedy'
  },
  {
    slug: 'dynamic-programming',
    title: 'Dynamic Programming',
    chapter: 13,
    tagline: "Save the work. Reuse the answer.",
    description: "Solve each useful state once.",
    image: '/patterns/dynamic-programming.webp',
    href: '/patterns/dynamic-programming'
  },
  {
    slug: 'graph-traversal',
    title: 'Graph Traversal',
    chapter: 14,
    tagline: "Follow the connections.",
    description: "Model the relationships, then walk the network.",
    image: '/patterns/graph-traversal.webp',
    href: '/patterns/graph-traversal'
  },
]

export const patternBySlug = Object.fromEntries(
  patterns.map((pattern) => [pattern.slug, pattern])
) as Record<string, PatternMeta>
