#!/usr/bin/env node

const { CLI } = require("../lib/");

const argv = process.argv.slice(2);

try {
    CLI(argv);
} catch (err) {
    /* eslint-disable-next-line no-console -- expected to log */
    console.error(err);
    process.exitCode = 1;
}
