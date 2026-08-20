# Two Pointers — Progressive Hints

**Rule:** only reveal the next hint after you have spent at least 10–15 focused minutes stuck.
No full solutions live here on purpose.

## 01 — Valid Palindrome
1. Begin at both ends.
2. Skip characters that should not participate in the comparison.
3. Compare lowercase versions only after both pointers sit on valid characters.

## 02 — Pair Sum in a Sorted Array
1. Start with the smallest and largest values.
2. If their sum is too small, changing the right pointer cannot help you increase it.
3. Move left for too-small sums; move right for too-large sums.

## 03 — Remove Duplicates
1. The sorted order places equal values next to each other.
2. One pointer scans every item; one marks where the next unique item belongs.
3. Only advance the write position when the read value differs from the last accepted value.

## 04 — Move Zeroes
1. Treat non-zero values as the values you want to keep in stable order.
2. The write pointer marks where the next kept value belongs.
3. After compacting non-zero values, the remaining slots must become zero.

## 05 — Sorted Squares
1. Negative values break the original sorting after squaring.
2. The largest absolute value must be at one of the two ends.
3. Fill the result from right to left.

## 06 — Container With Most Water
1. Area = width × the shorter of the two heights.
2. Moving inward always reduces width.
3. Therefore, only replacing the shorter boundary has a chance to compensate for lost width.

## 07 — Three Sum
1. Sort first.
2. Fix one number; now search for two numbers summing to its negation.
3. Skip repeated fixed values and repeated left/right values after finding a match.

## 08 — Merge Sorted Arrays
1. There is free space at the back of nums1.
2. Compare the largest unread values from both arrays.
3. Write the larger one into the last free slot and move backward.

## 09 — Trapping Rain Water
1. Water above a position depends on a boundary on both sides.
2. Keep only the best boundary seen so far from each side.
3. Process the side with the smaller current boundary; that side's water is already determined.

## 10 — Four Sum
1. Sort first.
2. Fix two indices, then solve a sorted Two Sum over the remaining suffix.
3. Skip duplicates at both outer-loop levels and both pointer levels.
4. Once correct, consider lower/upper-bound pruning using the sorted values.
