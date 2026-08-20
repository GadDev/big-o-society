## Two Pointers — 10 days

| Day | Exercise | Difficulty | Skill |
|---|---|---|---|
| 01 | Valid Palindrome | Easy | Opposite-end pointers |
| 02 | Pair Sum Sorted | Easy | Sorted pair elimination |
| 03 | Remove Duplicates | Easy | Read/write pointers |
| 04 | Move Zeroes | Easy | Stable in-place filtering |
| 05 | Sorted Squares | Medium | Compare extremes + backward write |
| 06 | Container With Most Water | Medium | Pointer-movement invariant |
| 07 | Three Sum | Medium | Sort + fixed value + two pointers |
| 08 | Merge Sorted Arrays | Medium | Backward merge |
| 09 | Trapping Rain Water | Hard | Two ends + running boundaries |
| 10 | Four Sum | Hard | Nested loops + two pointers |

**Reflex:** `ordered data + eliminate choices safely -> Two Pointers`

# 🥋 DSA Pattern Master — Curriculum

## Hash Map — 10 days

| Day | Exercise | Difficulty | Skill |
|---|---|---|---|
| 01 | Contains Duplicate | Easy | Set membership |
| 02 | Two Sum | Easy | Complement lookup |
| 03 | Valid Anagram | Easy | Frequency counting |
| 04 | First Unique Character | Easy | Count then preserve order |
| 05 | Group Anagrams | Medium | Canonical keys |
| 06 | Top K Frequent Elements | Medium | Frequency + ranking |
| 07 | Longest Consecutive Sequence | Medium | Set boundary detection |
| 08 | Subarray Sum Equals K | Medium | Hash Map + Prefix Sum |
| 09 | Isomorphic Strings | Medium | Bidirectional mapping |
| 10 | Max Points on a Line | Hard | Normalized keys + counting |

**Reflex:** `need to remember/count/find something already seen -> Map / Set`

## Sliding Window — 10 days

| Day | Exercise | Difficulty | Skill |
|---|---|---|---|
| 01 | Maximum Sum Subarray of Size K | Easy | Fixed window |
| 02 | Maximum Average Subarray | Easy | Fixed rolling state |
| 03 | Longest Substring Without Repeating | Medium | Variable window |
| 04 | Minimum Size Subarray Sum | Medium | Grow then shrink |
| 05 | Maximum Vowels | Medium | Fixed window count |
| 06 | Permutation in String | Medium | Window frequency profile |
| 07 | Find All Anagrams | Medium | Reuse frequency state |
| 08 | Longest Repeating Character Replacement | Medium | Validity invariant |
| 09 | Fruit Into Baskets | Medium | At-most-K distinct |
| 10 | Minimum Window Substring | Hard | Requirement counts + shrinking |

**Reflex:** `contiguous range + can update incrementally -> Sliding Window`

## Prefix Sum — 10 days

| Day | Exercise | Difficulty | Skill |
|---|---|---|---|
| 01 | Running Sum | Easy | Build cumulative state |
| 02 | Range Sum Query | Easy | Prefix difference |
| 03 | Pivot Index | Easy | Prefix vs total |
| 04 | Highest Altitude | Easy | Reconstruct from deltas |
| 05 | Subarray Sum Equals K | Medium | Prefix + frequency map |
| 06 | Subarrays Divisible by K | Medium | Prefix remainders |
| 07 | Continuous Subarray Sum | Medium | Remainder + earliest index |
| 08 | Range Addition | Medium | Difference array |
| 09 | 2D Region Sum Matrix | Medium | 2D prefix + inclusion/exclusion |
| 10 | Count of Range Sum | Hard | Prefix + divide and conquer |

**Reflex:** `many range totals / sum before index -> Prefix Sum`

## Stack — 10 days

| Day | Exercise | Difficulty | Skill |
|---|---|---|---|
| 01 | Valid Parentheses | Easy | Basic LIFO matching |
| 02 | Remove Adjacent Duplicates | Easy | Stack as editable history |
| 03 | Backspace String Compare | Easy | Stack simulation |
| 04 | Min Stack | Medium | Stack + synchronized metadata |
| 05 | Evaluate Reverse Polish Notation | Medium | Operand stack |
| 06 | Daily Temperatures | Medium | Monotonic stack |
| 07 | Next Greater Element II | Medium | Circular monotonic stack |
| 08 | Asteroid Collision | Medium | Stack as surviving history |
| 09 | Largest Rectangle in Histogram | Hard | Monotonic increasing stack |
| 10 | Basic Calculator — Boss Fight | Hard | Stack + parsing state |

**Reflex:** `nested structure / undo / nearest unresolved item -> Stack`

## Queue / Deque — 10 days

| Day | Exercise | Difficulty | Skill |
|---|---|---|---|
| 01 | Build an Array Queue | Easy | Queue fundamentals |
| 02 | Number of Recent Calls | Easy | Expire old queue entries |
| 03 | Moving Average from Data Stream | Easy | Fixed-size queue |
| 04 | First Unique Character in a Stream | Medium | Queue + frequency map |
| 05 | Time Needed to Buy Tickets | Medium | Queue simulation reasoning |
| 06 | Dota2 Senate | Medium | Two queues of indices |
| 07 | Sliding Window Maximum | Hard | Monotonic deque |
| 08 | Reveal Cards in Increasing Order | Medium | Queue of positions |
| 09 | Shortest Path in Binary Matrix | Medium | BFS queue |
| 10 | Shortest Subarray with Sum at Least K — Boss Fight | Hard | Prefix sum + monotonic deque |

**Reflex:** `process in arrival order / level by level / expire oldest -> Queue or Deque`

## Binary Search — 10 days

| Day | Exercise | Difficulty | Skill |
|---|---|---|---|
| 01 | Classic Binary Search | Easy | Exact lookup |
| 02 | Search Insert Position | Easy | Lower-bound boundary |
| 03 | Find First and Last Position | Medium | Left/right boundaries |
| 04 | Find Peak Element | Medium | Binary search on slope |
| 05 | Integer Square Root | Easy | Binary search numeric answer |
| 06 | Search in Rotated Sorted Array | Medium | Identify sorted half |
| 07 | Find Minimum in Rotated Sorted Array | Medium | Rotation boundary |
| 08 | Koko Eating Bananas | Medium | Binary search on answer |
| 09 | Capacity to Ship Packages Within D Days | Medium | Binary search on answer |
| 10 | Median of Two Sorted Arrays — Boss Fight | Hard | Partition binary search |

**Reflex:** `ordered search space + monotonic yes/no condition -> Binary Search`

## Fast & Slow Pointers — 10 days

| Day | Exercise | Difficulty | Skill |
|---|---|---|---|
| 01 | Middle of the Linked List | Easy | 1x / 2x speed |
| 02 | Linked List Cycle | Easy | Floyd cycle detection |
| 03 | Linked List Cycle II | Medium | Find cycle entry |
| 04 | Happy Number | Easy | Cycle detection on generated states |
| 05 | Palindrome Linked List | Medium | Middle + reverse + compare |
| 06 | Reorder List | Medium | Middle + reverse + merge |
| 07 | Find the Duplicate Number | Medium | Array values as next pointers |
| 08 | Circular Array Loop | Medium | Directional cycle detection |
| 09 | Maximum Twin Sum of a Linked List | Medium | Middle + reverse + pair |
| 10 | Cycle Analyzer — Boss Fight | Hard | Floyd + cycle metrics |

**Reflex:** `linked structure / repeated state / cycle -> move at different speeds`

## Depth-First Search (DFS) — 10 days

| Day | Exercise | Difficulty | Skill |
|---|---|---|---|
| 01 | Maximum Depth of Binary Tree | Easy | Recursive tree DFS |
| 02 | Invert Binary Tree | Easy | Tree mutation DFS |
| 03 | Same Tree | Easy | Parallel DFS |
| 04 | Path Sum | Easy | DFS with path state |
| 05 | Flood Fill | Medium | Grid DFS |
| 06 | Number of Islands | Medium | Connected components |
| 07 | Clone Graph | Medium | Graph DFS + map |
| 08 | All Paths From Source to Target | Medium | DFS path construction |
| 09 | Course Schedule | Medium | DFS cycle detection |
| 10 | Longest Increasing Path in a Matrix — Boss Fight | Hard | DFS + memoization |

**Reflex:** `explore one branch completely / connected region / recursive structure -> DFS`

## Mastery ladder

**L1 Recognize → L2 Implement → L3 Explain → L4 Adapt → L5 Combine**

Do not graduate an exercise just because the tests pass. You should also be able to explain the invariant, complexity, and why the pattern is appropriate.

## Breadth-First Search (BFS) — 10 days

| Day | Exercise | Difficulty | Skill |
|---|---|---|---|
| 01 | Binary Tree Level Order Traversal | Easy | Tree BFS by levels |
| 02 | Minimum Depth of Binary Tree | Easy | Early-exit BFS |
| 03 | Number of Islands with BFS | Medium | Grid connected components |
| 04 | Rotting Oranges | Medium | Multi-source BFS |
| 05 | 01 Matrix | Medium | Nearest-source multi-source BFS |
| 06 | Open the Lock | Medium | Implicit state graph |
| 07 | Word Ladder | Medium | BFS + pattern lookup |
| 08 | Shortest Path in Binary Matrix | Medium | 8-direction grid BFS |
| 09 | Nearest Exit from Entrance | Medium | Boundary-aware BFS |
| 10 | Shortest Path with Obstacle Eliminations — Boss Fight | Hard | BFS with state dimension |

**Reflex:** `minimum steps / shortest unweighted path / level-by-level expansion -> BFS`

## Backtracking — 10 days

| Day | Exercise | Difficulty | Skill |
|---|---|---|---|
| 01 | Subsets | Easy | Include/exclude choices |
| 02 | Permutations | Medium | Used-choice tracking |
| 03 | Combinations | Medium | Start-index pruning |
| 04 | Combination Sum | Medium | Reusable choices |
| 05 | Letter Combinations of a Phone Number | Medium | Decision tree expansion |
| 06 | Generate Parentheses | Medium | Constraint pruning |
| 07 | Word Search | Medium | Grid backtracking |
| 08 | Palindrome Partitioning | Medium | Backtracking + validation |
| 09 | N-Queens | Hard | Constraint sets |
| 10 | Sudoku Solver — Boss Fight | Hard | Constraint propagation + backtracking |

**Reflex:** `all combinations / all arrangements / choose then undo -> Backtracking`

## Greedy — 10 days

| Day | Exercise | Difficulty | Skill |
|---|---|---|---|
| 01 | Best Time to Buy and Sell Stock II | Easy | Take every profitable rise |
| 02 | Assign Cookies | Easy | Sort + smallest sufficient match |
| 03 | Jump Game | Medium | Farthest reachable frontier |
| 04 | Jump Game II | Medium | Greedy level frontier |
| 05 | Gas Station | Medium | Reset impossible prefixes |
| 06 | Non-overlapping Intervals | Medium | Earliest finish time |
| 07 | Partition Labels | Medium | Last occurrence frontier |
| 08 | Minimum Arrows to Burst Balloons | Medium | Interval stabbing |
| 09 | Merge Triplets to Form Target | Medium | Discard harmful candidates |
| 10 | Candy — Boss Fight | Hard | Two directional greedy constraints |

**Reflex:** `local choice can permanently discard worse options -> Greedy`

## Dynamic Programming — 10 days

| Day | Exercise | Difficulty | Skill |
|---|---|---|---|
| 01 | Climbing Stairs | Easy | 1D recurrence |
| 02 | Min Cost Climbing Stairs | Easy | 1D min-cost DP |
| 03 | House Robber | Medium | Take/skip DP |
| 04 | Coin Change | Medium | Unbounded minimum DP |
| 05 | Longest Increasing Subsequence | Medium | Sequence DP |
| 06 | Unique Paths | Medium | 2D grid DP |
| 07 | Longest Common Subsequence | Medium | 2D string DP |
| 08 | Partition Equal Subset Sum | Medium | 0/1 knapsack DP |
| 09 | Decode Ways | Medium | DP with validity rules |
| 10 | Edit Distance — Boss Fight | Hard | 2D transformation DP |

**Reflex:** `same subproblems repeat / best answer built from smaller answers -> Dynamic Programming`

## Graph Traversal — 10 days

| Day | Exercise | Difficulty | Skill |
|---|---|---|---|
| 01 | Find if Path Exists in Graph | Easy | Adjacency list + visited |
| 02 | Number of Provinces | Medium | Connected components from matrix |
| 03 | Count Connected Components | Medium | Undirected components |
| 04 | Graph Valid Tree | Medium | Connectivity + cycle invariant |
| 05 | Course Schedule II | Medium | Topological ordering |
| 06 | Is Graph Bipartite? | Medium | Graph coloring |
| 07 | Reorder Routes to Make All Paths Lead to Zero | Medium | Traversal with edge metadata |
| 08 | Evaluate Division | Medium | Weighted graph DFS/BFS |
| 09 | Network Delay Time | Medium | Dijkstra shortest paths |
| 10 | Alien Dictionary — Boss Fight | Hard | Graph construction + topological sort |

**Reflex:** `relationships / dependencies / routes / connected entities -> build a graph, then traverse it`

