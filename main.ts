// Make.fun competition entry submission script
import * as fs from 'node:fs';
import * as path from 'node:path';

const ENTRY_TEXT = "I am out of the office sitting inside a password-protected zip file for privacy; please do not decompress me until Monday morning.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), `${ENTRY_TEXT}\n`);
