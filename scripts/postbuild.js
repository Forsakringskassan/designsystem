#!/usr/bin/env node

const path = require("path");
const { promises: fs, existsSync } = require("fs");

const fse = require("fs-extra");

async function generatePublic() {
    await fs.mkdir("public/assets", { recursive: true });

    const haveLabs = existsSync("packages/vue-labs/public");
    const haveSandbox = existsSync("internal/vue-sandbox/dist");

    /* copy docs from each package */
    await Promise.all([
        fse.copy("packages/css-variables/dist", "public/assets"),
        fse.copy("packages/design/lib", "public/assets"),
        fse.copy("packages/date/typedoc", "public/date"),
        fse.copy("packages/logic/typedoc", "public/logic"),
    ]);

    if (haveLabs) {
        await fse.copy("packages/vue-labs/public", "public/vue-labs");
    }

    if (haveSandbox) {
        await fse.copy("internal/vue-sandbox/dist", "public/vue-sandbox");
    }
}

async function main() {
    /* ensure we are in the correct directory */
    process.chdir(path.join(__dirname, ".."));

    try {
        await generatePublic();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

main();
