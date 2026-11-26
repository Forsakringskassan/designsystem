#!/usr/bin/env node

import { cli } from "../dist/index.mjs";

const argv = process.argv.slice(2);

await cli(argv, {
    cwd: process.cwd(),
});
