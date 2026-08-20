import { describe, expect, it } from "vitest";
import { totalFruit } from "../../src/challenges/sliding-window/09-fruit-into-baskets";

describe("09 — Fruit Into Baskets", () => {
	it.each([
		{ input: [1, 2, 1], expected: 3 },
		{ input: [0, 1, 2, 2], expected: 3 },
		{ input: [1, 2, 3, 2, 2], expected: 4 },
		{ input: [], expected: 0 },
	])("$input -> $expected", ({ input, expected }) =>
		expect(totalFruit(input)).toBe(expected),
	);
});
