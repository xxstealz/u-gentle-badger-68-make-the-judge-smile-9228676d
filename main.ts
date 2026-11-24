// Make the Judge Smile — u-gentle-badger-68-make-the-judge-smile-9228676d
//
// Writes one line (149 characters) about a small good thing that happened
// today to /output/entry.txt. Deterministic: the same bytes on every run.
// No network, no reads outside this repository.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "At 3 a.m. the night nurse tucked my father's blanket in twice and whispered, 'so he dreams soft' — I stood there smiling like I'd been tucked in too.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
