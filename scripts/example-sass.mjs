import { moduleImporter } from "@forsakringskassan/sass-module-importer";
import { glob } from "glob";
import { compileAsync } from "sass";

const args = process.argv.slice(2);
const filenames = await glob(args, {
    posix: true,
    ignore: ["**/*-nocompile*"],
});

for (const filename of filenames.flat()) {
    try {
        await compileAsync(filename, {
            importers: [moduleImporter],
        });
    } catch (err) {
        console.error(`Failed to compile "${filename}":`, err.message);
        process.exitCode = 1;
    }
}
