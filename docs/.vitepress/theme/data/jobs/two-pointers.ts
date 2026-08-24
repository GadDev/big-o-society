export type Heat = 'LOW HEAT' | 'HOT' | 'RED ALERT' | 'MOST WANTED'

export type TwoPointerJob = {
  id: string
  day: number
  slug: string
  codename: string
  technicalTitle: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  heat: Heat
  targetMinutes: number
  briefing: string
  mission: string
  signature: string
  constraints: string[]
  examples: { input: string; output: string }[]
  tests: string[]
  hints: string[]
  debrief: string[]
  memory: string
  href: string
}

export const twoPointerJobs: TwoPointerJob[] = [
  {
    "id": "tp-01",
    "day": 1,
    "slug": "valid-palindrome",
    "codename": "The Mirror Job",
    "technicalTitle": "Valid Palindrome",
    "difficulty": "Easy",
    "heat": "LOW HEAT",
    "targetMinutes": 12,
    "briefing": "A message came in dirty: spaces, punctuation, mixed case. Determine whether the useful characters read the same from both ends.",
    "mission": "Return `true` when the string is a palindrome after ignoring non-alphanumeric characters and letter case.",
    "signature": "isPalindrome(input: string): boolean",
    "constraints": [
      "0 ≤ input.length ≤ 200,000",
      "Letters, digits, spaces and punctuation may appear",
      "Avoid building every possible substring"
    ],
    "examples": [
      {
        "input": "\"A man, a plan, a canal: Panama\"",
        "output": "true"
      },
      {
        "input": "\"race a car\"",
        "output": "false"
      },
      {
        "input": "\"\"",
        "output": "true"
      }
    ],
    "tests": [
      "empty string",
      "single useful character",
      "mixed case",
      "punctuation and spaces",
      "obvious non-palindrome",
      "long input"
    ],
    "hints": [
      "Put one pointer at each end.",
      "Skip characters that do not belong to the comparison.",
      "Only compare normalized characters after both pointers point at useful characters."
    ],
    "debrief": [
      "What does `left` represent? What does `right` represent?",
      "Why is moving inward safe after a matching pair?",
      "Why can you ignore punctuation without creating another full normalized string?"
    ],
    "memory": "opposite ends + comparison → two pointers",
    "href": "/patterns/two-pointers/jobs/valid-palindrome"
  },
  {
    "id": "tp-02",
    "day": 2,
    "slug": "pair-sum-sorted",
    "codename": "The Pairing",
    "technicalTitle": "Pair Sum in a Sorted Array",
    "difficulty": "Easy",
    "heat": "LOW HEAT",
    "targetMinutes": 15,
    "briefing": "You have a sorted ledger of numbers and one target total. Find the two entries that close the deal without checking every possible pair.",
    "mission": "Return the zero-based indices of two values whose sum equals `target`, or `null` if no pair exists.",
    "signature": "pairSumSorted(numbers: number[], target: number): [number, number] | null",
    "constraints": [
      "numbers is sorted in ascending order",
      "2 ≤ numbers.length ≤ 200,000",
      "Use O(1) extra space",
      "Do not use a Hash Map for this Job"
    ],
    "examples": [
      {
        "input": "numbers = [1, 2, 4, 6, 10], target = 8",
        "output": "[1, 3]"
      },
      {
        "input": "numbers = [2, 3, 7, 11], target = 9",
        "output": "[0, 2]"
      },
      {
        "input": "numbers = [1, 2, 3], target = 50",
        "output": "null"
      }
    ],
    "tests": [
      "pair at the edges",
      "pair in the middle",
      "duplicate values",
      "negative values",
      "no solution",
      "large sorted input"
    ],
    "hints": [
      "Start with the smallest and largest values.",
      "If the sum is too small, which side can possibly make it larger?",
      "Each pointer move should eliminate an entire group of impossible pairs."
    ],
    "debrief": [
      "Why does a sum that is too small justify moving only the left pointer?",
      "Which candidate pairs are eliminated by one pointer move?",
      "What property of the input makes this proof possible?"
    ],
    "memory": "sorted + pair target → two pointers",
    "href": "/patterns/two-pointers/jobs/pair-sum-sorted"
  },
  {
    "id": "tp-03",
    "day": 3,
    "slug": "remove-duplicates",
    "codename": "The Cleanup",
    "technicalTitle": "Remove Duplicates from Sorted Array",
    "difficulty": "Easy",
    "heat": "LOW HEAT",
    "targetMinutes": 15,
    "briefing": "The ledger is sorted but full of repeated entries. Keep one copy of each value and compact the useful data in place.",
    "mission": "Modify the array so its first `k` positions contain the unique values in order, then return `k`.",
    "signature": "removeDuplicates(numbers: number[]): number",
    "constraints": [
      "numbers is sorted",
      "Modify the input in place",
      "Use O(1) extra space",
      "Values after index `k - 1` do not matter"
    ],
    "examples": [
      {
        "input": "[1, 1, 2]",
        "output": "k = 2, first values = [1, 2]"
      },
      {
        "input": "[0,0,1,1,1,2,2,3,3,4]",
        "output": "k = 5, first values = [0,1,2,3,4]"
      },
      {
        "input": "[]",
        "output": "0"
      }
    ],
    "tests": [
      "empty input",
      "one value",
      "all duplicates",
      "no duplicates",
      "mixed runs of duplicates",
      "negative values"
    ],
    "hints": [
      "This time both pointers move left-to-right.",
      "One pointer reads every value; the other marks where the next unique value belongs.",
      "Ask: when is the current read value different from the last value we kept?"
    ],
    "debrief": [
      "What is the invariant of the prefix before the write pointer?",
      "Why is it safe to overwrite values behind the read pointer?",
      "How is this different from the opposite-ends version of Two Pointers?"
    ],
    "memory": "sorted + in-place compact → read/write pointers",
    "href": "/patterns/two-pointers/jobs/remove-duplicates"
  },
  {
    "id": "tp-04",
    "day": 4,
    "slug": "move-zeroes",
    "codename": "The Zero Sweep",
    "technicalTitle": "Move Zeroes",
    "difficulty": "Easy",
    "heat": "LOW HEAT",
    "targetMinutes": 15,
    "briefing": "Zeroes are cluttering the operation. Move them to the back without disturbing the order of the useful values.",
    "mission": "Move all `0` values to the end of the array in place while preserving the relative order of non-zero values.",
    "signature": "moveZeroes(numbers: number[]): void",
    "constraints": [
      "Modify the input in place",
      "Preserve non-zero order",
      "Use O(1) extra space",
      "0 ≤ numbers.length ≤ 200,000"
    ],
    "examples": [
      {
        "input": "[0, 1, 0, 3, 12]",
        "output": "[1, 3, 12, 0, 0]"
      },
      {
        "input": "[0, 0, 1]",
        "output": "[1, 0, 0]"
      },
      {
        "input": "[1, 2, 3]",
        "output": "[1, 2, 3]"
      }
    ],
    "tests": [
      "empty input",
      "all zeroes",
      "no zeroes",
      "alternating zeroes",
      "leading and trailing zeroes",
      "relative order preserved"
    ],
    "hints": [
      "Think read pointer + write pointer.",
      "Every non-zero value belongs at the next write position.",
      "After compacting the useful values, what should fill the remaining positions?"
    ],
    "debrief": [
      "What does the write pointer mean at every moment?",
      "Why does the algorithm preserve the order of non-zero values?",
      "Could swapping also work? What invariant would you use?"
    ],
    "memory": "stable in-place filtering → read/write pointers",
    "href": "/patterns/two-pointers/jobs/move-zeroes"
  },
  {
    "id": "tp-05",
    "day": 5,
    "slug": "sorted-squares",
    "codename": "The Square Deal",
    "technicalTitle": "Squares of a Sorted Array",
    "difficulty": "Medium",
    "heat": "HOT",
    "targetMinutes": 18,
    "briefing": "The numbers are sorted, but squaring them destroys the order because negatives can become huge. Rebuild the sorted result without sorting again.",
    "mission": "Return a new array containing the squares of each number in non-decreasing order.",
    "signature": "sortedSquares(numbers: number[]): number[]",
    "constraints": [
      "numbers is sorted in ascending order",
      "1 ≤ numbers.length ≤ 200,000",
      "Target O(n) time",
      "Do not call `.sort()` on the squared result"
    ],
    "examples": [
      {
        "input": "[-4, -1, 0, 3, 10]",
        "output": "[0, 1, 9, 16, 100]"
      },
      {
        "input": "[-7, -3, 2, 3, 11]",
        "output": "[4, 9, 9, 49, 121]"
      }
    ],
    "tests": [
      "all positive",
      "all negative",
      "mixed signs",
      "duplicate absolute values",
      "single value",
      "large input"
    ],
    "hints": [
      "Where must the largest square come from?",
      "Compare absolute values at the two ends.",
      "Fill the result from right to left."
    ],
    "debrief": [
      "Why can the largest remaining square only be at one of the ends?",
      "Why is writing backward convenient?",
      "What invariant does the already-filled suffix of the result satisfy?"
    ],
    "memory": "sorted + transformed extremes → two pointers from both ends",
    "href": "/patterns/two-pointers/jobs/sorted-squares"
  },
  {
    "id": "tp-06",
    "day": 6,
    "slug": "container-most-water",
    "codename": "The Container Deal",
    "technicalTitle": "Container With Most Water",
    "difficulty": "Medium",
    "heat": "HOT",
    "targetMinutes": 20,
    "briefing": "Two vertical walls form a container. Width matters, height matters, and checking every pair is too expensive. Find the most profitable container.",
    "mission": "Given wall heights, return the maximum amount of water any pair of walls can contain.",
    "signature": "maxArea(height: number[]): number",
    "constraints": [
      "2 ≤ height.length ≤ 100,000",
      "0 ≤ height[i] ≤ 100,000",
      "Target O(n) time",
      "Use O(1) extra space"
    ],
    "examples": [
      {
        "input": "[1,8,6,2,5,4,8,3,7]",
        "output": "49"
      },
      {
        "input": "[1,1]",
        "output": "1"
      },
      {
        "input": "[4,3,2,1,4]",
        "output": "16"
      }
    ],
    "tests": [
      "two walls",
      "classic example",
      "equal tall edges",
      "strictly increasing",
      "strictly decreasing",
      "zero-height walls"
    ],
    "hints": [
      "Area is `width × min(leftHeight, rightHeight)`.",
      "Moving inward always reduces width.",
      "Which wall must change if you want any chance of increasing the limiting height?"
    ],
    "debrief": [
      "Why is moving the shorter wall safe?",
      "Why would moving the taller wall never rescue the current shorter boundary?",
      "State the invariant/proof in your own words—not just the formula."
    ],
    "memory": "maximize pair + shrinking width → move the limiting side",
    "href": "/patterns/two-pointers/jobs/container-most-water"
  },
  {
    "id": "tp-07",
    "day": 7,
    "slug": "three-sum",
    "codename": "The Three-Man Crew",
    "technicalTitle": "3Sum",
    "difficulty": "Medium",
    "heat": "HOT",
    "targetMinutes": 25,
    "briefing": "Find every unique crew of three numbers whose total is zero. Duplicate crews are forbidden.",
    "mission": "Return all unique triplets `[a, b, c]` such that `a + b + c === 0`.",
    "signature": "threeSum(numbers: number[]): number[][]",
    "constraints": [
      "3 ≤ numbers.length ≤ 3,000",
      "The answer must not contain duplicate triplets",
      "Sorting is allowed",
      "Target O(n²) time"
    ],
    "examples": [
      {
        "input": "[-1,0,1,2,-1,-4]",
        "output": "[[-1,-1,2],[-1,0,1]]"
      },
      {
        "input": "[0,1,1]",
        "output": "[]"
      },
      {
        "input": "[0,0,0]",
        "output": "[[0,0,0]]"
      }
    ],
    "tests": [
      "classic input",
      "all zeroes",
      "no solution",
      "duplicate-heavy input",
      "negative and positive mix",
      "result uniqueness"
    ],
    "hints": [
      "Sort first.",
      "Freeze one number; what two-number problem remains?",
      "Skip duplicates for the frozen value and after finding a valid pair."
    ],
    "debrief": [
      "Why does sorting unlock the Two Pointers subproblem?",
      "Where can duplicates enter the result?",
      "Why is O(n²) the intended improvement over brute force?"
    ],
    "memory": "3 values + sorted → freeze one + two pointers",
    "href": "/patterns/two-pointers/jobs/three-sum"
  },
  {
    "id": "tp-08",
    "day": 8,
    "slug": "merge-sorted-arrays",
    "codename": "The Backroom Merge",
    "technicalTitle": "Merge Sorted Arrays In Place",
    "difficulty": "Medium",
    "heat": "HOT",
    "targetMinutes": 20,
    "briefing": "Two sorted ledgers must become one. The first ledger has spare room at the back—but writing from the front would destroy evidence you still need.",
    "mission": "Merge `nums2` into `nums1` in sorted order in place. `nums1` has enough trailing capacity for every value.",
    "signature": "mergeSorted(nums1: number[], m: number, nums2: number[], n: number): void",
    "constraints": [
      "`nums1.length === m + n`",
      "First `m` values of nums1 are valid",
      "All `n` values of nums2 are valid",
      "Use O(1) extra space"
    ],
    "examples": [
      {
        "input": "nums1=[1,2,3,0,0,0], m=3, nums2=[2,5,6], n=3",
        "output": "[1,2,2,3,5,6]"
      },
      {
        "input": "nums1=[1], m=1, nums2=[], n=0",
        "output": "[1]"
      },
      {
        "input": "nums1=[0], m=0, nums2=[1], n=1",
        "output": "[1]"
      }
    ],
    "tests": [
      "both arrays populated",
      "nums2 empty",
      "nums1 initially empty",
      "all nums2 values smaller",
      "all nums2 values larger",
      "duplicates"
    ],
    "hints": [
      "The empty capacity is at the back.",
      "Compare the largest remaining values, not the smallest.",
      "Use three indices: end of nums1 data, end of nums2, and final write position."
    ],
    "debrief": [
      "Why is writing from the back safe?",
      "What would go wrong if you wrote from the front?",
      "What does each of the three pointers represent?"
    ],
    "memory": "merge sorted in place + spare tail → walk backward",
    "href": "/patterns/two-pointers/jobs/merge-sorted-arrays"
  },
  {
    "id": "tp-09",
    "day": 9,
    "slug": "trapping-rain-water",
    "codename": "The Reservoir",
    "technicalTitle": "Trapping Rain Water",
    "difficulty": "Hard",
    "heat": "RED ALERT",
    "targetMinutes": 30,
    "briefing": "After the storm, water collects between walls of different heights. Calculate the total trapped volume without storing a full left-max and right-max array.",
    "mission": "Return the total amount of rain water trapped by the elevation map.",
    "signature": "trap(height: number[]): number",
    "constraints": [
      "1 ≤ height.length ≤ 100,000",
      "0 ≤ height[i] ≤ 100,000",
      "Target O(n) time",
      "Target O(1) extra space"
    ],
    "examples": [
      {
        "input": "[0,1,0,2,1,0,1,3,2,1,2,1]",
        "output": "6"
      },
      {
        "input": "[4,2,0,3,2,5]",
        "output": "9"
      },
      {
        "input": "[1,2,3,4]",
        "output": "0"
      }
    ],
    "tests": [
      "classic basin",
      "deep uneven basin",
      "monotonic increasing",
      "monotonic decreasing",
      "flat heights",
      "multiple basins"
    ],
    "hints": [
      "Track the best wall seen from each side.",
      "The smaller side determines which water amount is already knowable.",
      "If `leftMax <= rightMax`, the left side can be finalized without knowing anything else on the right."
    ],
    "debrief": [
      "Why can the lower known boundary be finalized?",
      "What do `leftMax` and `rightMax` mean?",
      "Explain why every index is processed exactly once."
    ],
    "memory": "water between boundaries → two pointers + running left/right max",
    "href": "/patterns/two-pointers/jobs/trapping-rain-water"
  },
  {
    "id": "tp-10",
    "day": 10,
    "slug": "four-sum",
    "codename": "The Four-Way Contract",
    "technicalTitle": "4Sum",
    "difficulty": "Hard",
    "heat": "MOST WANTED",
    "targetMinutes": 35,
    "briefing": "Four numbers must sign the same contract: their total has to equal the target. Find every unique crew without drowning in O(n⁴) combinations.",
    "mission": "Return all unique quadruplets `[a,b,c,d]` whose sum equals `target`.",
    "signature": "fourSum(numbers: number[], target: number): number[][]",
    "constraints": [
      "1 ≤ numbers.length ≤ 200",
      "Answers must be unique",
      "Sorting is allowed",
      "Watch for duplicate values",
      "Target O(n³) time"
    ],
    "examples": [
      {
        "input": "numbers=[1,0,-1,0,-2,2], target=0",
        "output": "[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]"
      },
      {
        "input": "numbers=[2,2,2,2,2], target=8",
        "output": "[[2,2,2,2]]"
      }
    ],
    "tests": [
      "classic example",
      "all duplicates",
      "no solution",
      "negative target",
      "mixed large values",
      "result uniqueness"
    ],
    "hints": [
      "Sort first.",
      "Freeze two positions. What familiar problem remains for the other two?",
      "Skip duplicates at both frozen levels and after finding each pair."
    ],
    "debrief": [
      "How is this an adaptation of 3Sum?",
      "Why is O(n³) expected here?",
      "List every place duplicate handling is required.",
      "If you had to build kSum, what recursive structure would you reuse?"
    ],
    "memory": "4 values → freeze two + two pointers",
    "href": "/patterns/two-pointers/jobs/four-sum"
  },
]

export const twoPointerJobById = Object.fromEntries(
  twoPointerJobs.map((job) => [job.id, job])
) as Record<string, TwoPointerJob>
