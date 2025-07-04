/* eslint-disable no-console -- expected to log */
/// <reference types="Cypress" />
// @ts-check

import path from "node:path";
import globby from "globby";

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
 * @param {Cypress.PluginConfigOptions} config Cypress config object
 * @returns {string[]}
 */
function getSpecs(config) {
    const {
        projectRoot,
        specPattern,
        excludeSpecPattern,
        additionalIgnorePattern,
    } = config;
    return globby
        .sync(specPattern, {
            cwd: projectRoot,
            absolute: true,
            ignore: [
                ...excludeSpecPattern,
                additionalIgnorePattern,
                "**/node_modules/**",
            ],
        })
        .toSorted();
}

/**
 * Initialize Cypress split plugin using Cypress "on" and "config" arguments.
 * @param {Cypress.PluginEvents} _on Cypress "on" event registration
 * @param {Cypress.PluginConfigOptions} config Cypress config object
 */
function cypressSplit(_on, config) {
    if (!process.env.SPLIT) {
        return config;
    }

    const specs = getSpecs(config);
    const splitN = Number(process.env.SPLIT);
    const splitIndex = Number(process.env.SPLIT_INDEX);

    const { splitSpecs } = splitSpecsLogic({
        specs,
        splitN,
        splitIndex,
    });

    config.specPattern = splitSpecs;

    return config;
}

export default cypressSplit;
