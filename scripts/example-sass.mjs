import fs from "node:fs/promises";
import { moduleImporter } from "@forsakringskassan/sass-module-importer";
import { compileAsync } from "sass";

const args = process.argv.slice(2);
const filenames = fs.glob(args, {
    exclude: ["**/*-nocompile*"],
});

for await (const filename of filenames) {
    try {
        await compileAsync(filename, {
            importers: [moduleImporter()],
        });
    } catch (err) {
        console.error(`Failed to compile "${filename}":`, err.message);
        process.exitCode = 1;
    }
}
