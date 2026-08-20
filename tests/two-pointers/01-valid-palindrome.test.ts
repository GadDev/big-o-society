import { describe, expect, it } from "vitest";
import { isPalindrome } from "../../src/challenges/two-pointers/01-valid-palindrome";

describe("01 — Valid Palindrome", () => {
	it.each([
		["racecar", true],
		["A man, a plan, a canal: Panama", true],
		["No lemon, no melon!", true],
		["race a car", false],
		["", true],
		[".", true],
		["0P", false],
	])("%j -> %s", (input, expected) => {
		expect(isPalindrome(input)).toBe(expected);
	});
});
