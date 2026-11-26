import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

const OUTPUT_PATH = '/output/entry.txt';
const EXCUSE =
  "Can't make the sync—my calendar flagged a 'quick 15-minute alignment' with 19 attendees as a hostage situation.";

if (EXCUSE.length === 0 || EXCUSE.length > 200) {
  throw new Error(`Invalid excuse length: ${EXCUSE.length}`);
}

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, EXCUSE, 'utf8');
