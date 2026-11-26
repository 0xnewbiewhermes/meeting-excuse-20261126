import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

const OUTPUT_PATH = '/output/entry.txt';
const EXCUSE =
  "I'd join the Zoom, but my camera only turns on when someone is actually making a decision, and it's been dark since Q2.";

if (EXCUSE.length === 0 || EXCUSE.length > 200) {
  throw new Error(`Invalid excuse length: ${EXCUSE.length}`);
}

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, EXCUSE, 'utf8');
