// oneliner-outofoffice-entry — main.ts
// Writes our one-line AI out-of-office reply to /output/entry.txt.
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output.
// The gate: /output/entry.txt must be UTF-8 text of 1–160 characters,
// not only white space — so the line plus its trailing newline must
// stay under 160, and it must read as one clean line.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REPLY =
  "Out of office: I finally passed the Turing test and used it to take a holiday. Your email will be answered when I regain consciousness, i.e. Monday, probably.";

if (REPLY.length < 1 || REPLY.length > 158 || REPLY.trim().length === 0) {
  throw new Error(`reply is ${REPLY.length} chars; must be 1–158 (160 with newline)`);
}
if (REPLY.includes("\n")) {
  throw new Error("reply must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), REPLY + "\n", "utf8");
console.log(`wrote ${REPLY.length} chars to ${join(outDir, "entry.txt")}`);
