import { spawnSync } from "node:child_process";
import { readdirSync } from "node:fs";
import { join } from "node:path";

const testsRoot = join(process.cwd(), "tests");
const patterns = readdirSync(testsRoot, { withFileTypes: true })
	.filter((entry) => entry.isDirectory())
	.map((entry) => entry.name)
	.sort();

const toTitle = (pattern) =>
	pattern.replace(/(^|-)([a-z])/g, (_, sep, letter) => `${sep === "-" ? " " : ""}${letter.toUpperCase()}`);

const rawArgs = process.argv.slice(2);
const watch = rawArgs.includes("--watch");
const [rawPattern, rawDay] = rawArgs.filter((arg) => arg !== "--watch");

if (!rawPattern) {
	console.log("\n⚔️ DSA patterns\n");
	for (const pattern of patterns) console.log(`  ${pattern}`);
	console.log(
		"\nRun: npm run practice -- <pattern> <day>\nExample: npm run practice -- two-pointers 6\n",
	);
	process.exit(0);
}

if (!patterns.includes(rawPattern)) {
	console.error(`Unknown pattern "${rawPattern}". Choose one of: ${patterns.join(", ")}`);
	process.exit(1);
}

const testDir = join(testsRoot, rawPattern);
const files = readdirSync(testDir)
	.filter((file) => file.endsWith(".test.ts"))
	.sort();

if (!rawDay) {
	console.log(`\n⚔️ ${toTitle(rawPattern)} practice\n`);
	for (const file of files)
		console.log(`  ${file.slice(0, 2)}  ${file.slice(3, -8)}`);
	console.log(
		`\nRun: npm run practice -- ${rawPattern} <day>\nExample: npm run practice -- ${rawPattern} 6\n`,
	);
	process.exit(0);
}

const day = Number.parseInt(rawDay, 10);
if (!Number.isInteger(day) || day < 1 || day > files.length) {
	console.error(`Choose a day between 1 and ${files.length}.`);
	process.exit(1);
}

const file = join("tests", rawPattern, files[day - 1]);
console.log(
	`\n🧠 ${toTitle(rawPattern)} Day ${String(day).padStart(2, "0")} — ${files[day - 1].slice(3, -8)}\n`,
);

const npm = process.platform === "win32" ? "npm.cmd" : "npm";
const vitestArgs = watch ? [file] : ["run", file];
const result = spawnSync(npm, ["exec", "vitest", "--", ...vitestArgs], {
	stdio: "inherit",
	shell: false,
});

process.exit(result.status ?? 1);
