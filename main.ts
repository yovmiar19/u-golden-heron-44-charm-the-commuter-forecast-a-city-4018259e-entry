// Charm the Commuter — a one-line forecast for a city that isn't.
//
// The whole entry is a single weather line for Glimmerwick, a city that
// does not exist. This program writes that line, byte for byte, to
// <OUTPUT_DIR>/entry.txt (default /output/entry.txt). No trailing newline:
// the file must contain exactly the forecast line and nothing else.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORECAST =
  "Glimmerwick: expect sideways rain, a strong smell of cinnamon, and one (1) lost tourist per hour.";

function main(): void {
  // The sealed scorer only accepts 1–140 characters; refuse to write
  // anything outside that window rather than emitting a bad entry.
  if (FORECAST.length < 1 || FORECAST.length > 140) {
    throw new Error(`Forecast must be 1-140 characters, got ${FORECAST.length}`);
  }
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), FORECAST, "utf8");
}

main();
