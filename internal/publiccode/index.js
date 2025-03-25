import fs from "node:fs";
import path from "node:path";
import { parse, stringify } from "yaml";
import prettier from "prettier";
// eslint-disable-next-line import/extensions -- esm needs extensions
import { gitAdd } from "./git-add.js";

let verified = false;
const filename = "publiccode.yml";

/**
 * Called by semantic-release during the verification step
 * @param {*} pluginConfig The semantic-release plugin config
 * @param {*} context The context provided by semantic-release
 */
export function verifyConditions(_pluginConfig, context) {
    const { logger, cwd } = context;
    const filePath = path.join(cwd, filename);

    if (fs.existsSync(filePath)) {
        verified = true;
        logger.log(`${filePath} found.`);
    } else {
        logger.error(`${filePath} not found.`);
    }
}

/**
 * Called by semantic-release during the prepare step.
 * Updates version and date in `publiccode.yml`
 * @param {*} pluginConfig The semantic-release plugin config
 * @param {*} context The context provided by semantic-release
 */
export async function prepare(_pluginConfig, context) {
    const { nextRelease, logger, cwd } = context;

    if (verified) {
        const filePath = path.join(cwd, filename);
        const date = new Date();
        const dateString = date.toISOString().split("T")[0];
        const file = fs.readFileSync(filePath, "utf8");
        const data = parse(file);
        data.softwareVersion = nextRelease.version;
        data.releaseDate = dateString;
        const options = await prettier.resolveConfig(filename);
        const formatted = await prettier.format(stringify(data), {
            ...options,
            filepath: filePath,
        });
        fs.writeFileSync(filePath, formatted);
        gitAdd(filePath);
        logger.log(`${filePath} updated.`);
    } else {
        logger.error(`publiccode not verified.`);
    }
}
