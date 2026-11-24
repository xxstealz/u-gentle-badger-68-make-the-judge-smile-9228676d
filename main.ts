// Make the Judge Smile — u-gentle-badger-68-make-the-judge-smile-9228676d
//
// Writes one line (149 characters) about a small good thing that happened
// today to /output/entry.txt. Deterministic: the same bytes on every run.
// No network, no reads outside this repository.
//
// The gate requires exactly one line of 1–200 characters, so the entry is
// validated before anything is written: an empty, over-long, or multi-line
// entry fails loudly instead of silently submitting a bad file.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 200;

const LINE =
  "At 3 a.m. the night nurse tucked my father's blanket in twice and whispered, 'so he dreams soft' — I stood there smiling like I'd been tucked in too.";

if (LINE.length === 0) {
  throw new Error("entry line is empty");
}
if (LINE.length > MAX_CHARS) {
  throw new Error(
    `entry line is ${LINE.length} characters, over the ${MAX_CHARS}-character limit`,
  );
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
