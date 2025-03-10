import fs from "node:fs";
import { parse, stringify } from "yaml";

let verified = false;

/**
 * Called by semantic-release during the verification step
 * @param {*} pluginConfig The semantic-release plugin config
 * @param {*} context The context provided by semantic-release
 */
export function verifyConditions(pluginConfig, context) {
    const { message } = pluginConfig;
    const { logger } = context;
    if (fs.existsSync(message.path)) {
        verified = true;
        logger.log("publiccode.yml found.");
    } else {
        logger.error(`${message.path} not found!`);
        return false;
    }
}

/**
 * Updates version and date in `publiccode.yml`
 * @param {*} pluginConfig The semantic-release plugin config
 * @param {*} context The context provided by semantic-release
 */
export async function generateNotes(pluginConfig, context) {
    if (verified) {
        const { nextRelease, logger } = context;
        const { message } = pluginConfig;
        const date = new Date();
        const dateString = date.toISOString().split("T")[0];
        const file = fs.readFileSync(message.path, "utf8");
        const data = parse(file);
        data.softwareVersion = nextRelease.version;
        data.releaseDate = dateString;
        fs.writeFileSync(message.path, stringify(data));
        logger.log("publiccode.yml updated.");
    }
}
