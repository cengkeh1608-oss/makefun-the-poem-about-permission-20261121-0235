// The Power to Ask — a short poem about agency: the power to ask and to be given.
// Writes one poem to /output/entry.txt (UTF-8, 1-280 Unicode code points).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = [
  "My daughter's baby came in March.",
  "I had my agent write and ask",
  "if I might come and see him.",
  "She said yes. Come Sunday, Dad.",
  "I deleted its perfect message",
  "and sent my own: Can I hold him?",
  "She wrote back: Yes. Please.",
  "The agent can ask for anything.",
  "It cannot want the answer.",
].join("\n") + "\n";

// The gate refuses entries over 280 Unicode code points: fail loudly here
// instead of submitting an invalid entry.
if ([...poem].length > 280 || poem.trim().length === 0) {
  throw new Error(`poem must be 1-280 non-whitespace characters, got ${[...poem].length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
