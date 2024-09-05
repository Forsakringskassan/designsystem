/* eslint-disable no-console -- expected to log */
const { serve } = require("./serve");
const Table = require("cli-table");

const defaultPort = 8080;

/**
 * @param {string[]} argv
 * @returns {void}
 */
function CLI(argv) {
    const flags = argv.filter((it) => it.startsWith("-"));
    const positionals = argv.filter((it) => !it.startsWith("-"));
    const port = process.env.HTTP_PORT
        ? parseInt(process.env.HTTP_PORT, 10)
        : defaultPort;
    const verbose = !flags.includes("-s") && !flags.includes("--silent");
    const folders = positionals;
    serve(port, folders, {
        verbose,
        onReady(addr, paths) {
            const table = new Table({
                head: ["URL", "Path"],
                style: { compact: true, head: ["cyan"] },
                rows: Object.entries(paths),
            });
            console.log();
            console.log(`Server started at http://localhost:${addr.port}`);
            console.log();
            if (verbose) {
                console.table(table.toString());
                console.log();
            }
        },
    });
}

module.exports = { CLI };
