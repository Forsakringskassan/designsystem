import fs from "node:fs/promises";

await fs.mkdir("test-results", { recursive: true });
