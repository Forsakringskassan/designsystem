/* eslint-disable no-console -- expected to log */

import { glob } from "node:fs/promises";
import path from "node:path";

/**
 * @template T
 * @param {T[]} a
 * @param {number} n
 * @returns {T[][]}
 */
function chunkify(a, n) {
    if (n < 2) {
        return [a];
    }

    const len = a.length;
    const out = [];
    let i = 0;
    if (len % n === 0) {
        const size = Math.floor(len / n);
        while (i < len) {
            out.push(a.slice(i, (i += size)));
        }
    } else {
        while (i < len) {
            const size = Math.ceil((len - i) / n--);
            out.push(a.slice(i, (i += size)));
        }
    }

    return out;
}

/**
 * @param {Object} options
 * @param {string[]} options.specs
 * @param {number} options.splitN
 * @param {number} options.splitIndex
 * @return {{ splitSpecs: string[]}}
 */
function splitSpecsLogic(options) {
    const { specs, splitN, splitIndex } = options;
    const chunks = chunkify(specs, splitN);
    const splitSpecs = chunks[splitIndex] || [];

    console.log(
        `Splitting ${specs.length} specs, using chunk ${splitIndex + 1} of ${splitN}`,
    );

    const cwd = process.cwd();
    const group = process.env.GITHUB_ACTIONS ? "::group::" : "";
    const endgroup = process.env.GITHUB_ACTIONS ? "::endgroup::" : "";

    for (let i = 0; i < splitN; i++) {
        const current = i === splitIndex ? " *" : "";
        const chunk = chunks[i];
        console.log(`${group}Chunk ${String(i + 1)} of ${splitN}${current}`);
        console.log(`${chunk.length} specs in this chunk`);
        chunk.forEach((spec, index) => {
            const last = index === chunk.length - 1;
            const prefix = last ? "└" : "├";
            const filePath = path.relative(cwd, spec);
            console.log(`${prefix} ${filePath}`);
        });
        console.log(endgroup);
    }

    return { splitSpecs };
}

/**
 * @template T
 * @param {T | T[]} value
 * @returns {T[]}
 */
function toArray(value) {
    return Array.isArray(value) ? value : [value];
}

/**
 * @param {Cypress.PluginConfigOptions & { additionalIgnorePattern?: string }} config Cypress config object
 * @returns {Promise<string[]>}
 */
async function getSpecs(config) {
    const {
        projectRoot,
        specPattern,
        excludeSpecPattern,
        additionalIgnorePattern,
    } = config;
    const exclude = [...toArray(excludeSpecPattern), "**/node_modules/**"];
    if (additionalIgnorePattern) {
        exclude.push(additionalIgnorePattern);
    }
    const iterator = glob(specPattern, { cwd: projectRoot, exclude });
    const specFiles = await Array.fromAsync(iterator);
    return specFiles.map((it) => path.resolve(it)).toSorted();
}

/**
 * Initialize Cypress split plugin using Cypress "on" and "config" arguments.
 * @template {Cypress.PluginConfigOptions} T
 * @param {Cypress.PluginEvents} _on Cypress "on" event registration
 * @param {T} config Cypress config object
 * @returns Promise<T>
 */
async function cypressSplit(_on, config) {
    if (!process.env.SPLIT) {
        return config;
    }

    const specs = await getSpecs(config);
    const splitN = Number(process.env.SPLIT);
    const splitIndex = Number(process.env.SPLIT_INDEX ?? 0);

    const { splitSpecs } = splitSpecsLogic({
        specs,
        splitN,
        splitIndex,
    });

    config.specPattern = splitSpecs;

    return config;
}

export default cypressSplit;
