/* eslint-disable no-console -- expected to log */
const { serve } = require("@fkui/serve");
const Table = require("cli-table");

const port = process.env.HTTP_PORT ? parseInt(process.env.HTTP_PORT, 10) : 8080;
const folders = {
    "/": "public",
};

serve(port, folders, {
    verbose: false,
    onReady(addr, paths) {
        const table = new Table({
            head: ["URL", "Path"],
            style: { compact: true, head: ["cyan"] },
            rows: Object.entries(paths),
        });
        console.log();
        console.log(`Server started at http://localhost:${addr.port}`);
        console.log();
        console.table(table.toString());
        console.log();
    },
});
