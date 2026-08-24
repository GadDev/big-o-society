import { defineConfig } from "vitepress";

export default defineConfig({
	title: "Big O Society",
	description: "Recognize the pattern. Crack the problem.",
	base: "/big-o-society/",
	appearance: "force-dark",
	cleanUrls: true,

	head: [
		["meta", { name: "theme-color", content: "#090908" }],
		["meta", { name: "color-scheme", content: "dark" }],
	],

	themeConfig: {
		siteTitle: "BIG O SOCIETY",
		nav: [
			{ text: "Case Files", link: "/patterns/" },
			{ text: "Curriculum", link: "/curriculum" },
			{
				text: "Training Board",
				link: "/training/progress",
			},
		],

		sidebar: {
			"/patterns/": [
				{
					text: "CASE FILES",
					items: [
						{ text: "01 · Two Pointers", link: "/patterns/two-pointers" },
						{ text: "02 · Hash Map", link: "/patterns/hash-map" },
						{ text: "03 · Sliding Window", link: "/patterns/sliding-window" },
						{ text: "04 · Prefix Sum", link: "/patterns/prefix-sum" },
						{ text: "05 · Stack", link: "/patterns/stack" },
						{ text: "06 · Queue", link: "/patterns/queue" },
						{ text: "07 · Binary Search", link: "/patterns/binary-search" },
						{ text: "08 · Fast & Slow", link: "/patterns/fast-slow" },
						{ text: "09 · DFS", link: "/patterns/dfs" },
						{ text: "10 · BFS", link: "/patterns/bfs" },
						{ text: "11 · Backtracking", link: "/patterns/backtracking" },
						{ text: "12 · Greedy", link: "/patterns/greedy" },
						{
							text: "13 · Dynamic Programming",
							link: "/patterns/dynamic-programming",
						},
						{ text: "14 · Graph Traversal", link: "/patterns/graph-traversal" },
					],
				},
			],
			"/patterns/two-pointers/": [
				{
					text: "CASE 01 · TWO POINTERS",

					items: [
						{
							text: "Case File",
							link: "/patterns/two-pointers/",
						},

						{
							text: "01 · The Mirror Job",
							link: "/patterns/two-pointers/jobs/valid-palindrome",
						},

						{
							text: "02 · The Pairing",
							link: "/patterns/two-pointers/jobs/pair-sum-sorted",
						},

						{
							text: "03 · The Cleanup",
							link: "/patterns/two-pointers/jobs/remove-duplicates",
						},

						{
							text: "04 · The Zero Sweep",
							link: "/patterns/two-pointers/jobs/move-zeroes",
						},

						{
							text: "05 · The Square Deal",
							link: "/patterns/two-pointers/jobs/sorted-squares",
						},

						{
							text: "06 · The Container Deal",
							link: "/patterns/two-pointers/jobs/container-most-water",
						},

						{
							text: "07 · The Three-Man Crew",
							link: "/patterns/two-pointers/jobs/three-sum",
						},

						{
							text: "08 · The Backroom Merge",
							link: "/patterns/two-pointers/jobs/merge-sorted-arrays",
						},

						{
							text: "09 · The Reservoir",
							link: "/patterns/two-pointers/jobs/trapping-rain-water",
						},

						{
							text: "10 · The Four-Way Contract",
							link: "/patterns/two-pointers/jobs/four-sum",
						},
					],
				},
			],
		},
		outline: {
			level: [2, 3],
			label: "Evidence",
		},
		docFooter: {
			prev: "Previous case",
			next: "Next case",
		},
		search: {
			provider: "local",
		},
		socialLinks: [
			{ icon: "github", link: "https://github.com/GadDev/big-o-society" },
		],
	},
});
