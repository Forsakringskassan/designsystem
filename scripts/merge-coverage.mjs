// scripts/merge-coverage.mjs

import fs from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";

const require = createRequire(import.meta.url);

const { createCoverageMap } = require("istanbul-lib-coverage");
const { createContext } = require("istanbul-lib-report");
const reports = require("istanbul-reports");

// -----------------------------------------------------------------------------
// Configuration
// -----------------------------------------------------------------------------

const root = process.cwd();

const vitestFile = path.join(root, "coverage", "vitest", "coverage-final.json");
const cypressFile = path.join(
    root,
    "coverage",
    "cypress",
    "coverage-final.json",
);

const outputDir = path.join(root, "coverage", "merged");

const htmlDir = path.join(outputDir, "html");

const lcovDir = path.join(outputDir, "lcov");

// Set this to the file you want to debug.
//
// Example:
// const debugFile = 'SomeComponent.tsx'
//
// Set to null to disable detailed statement debugging.
const debugFile = null;

// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------

function readJson(file) {
    return JSON.parse(fs.readFileSync(file, "utf8"));
}

function relative(file) {
    return path.relative(root, file);
}

function inspectCoverage(label, coverage) {
    const files = Object.keys(coverage);

    const file = debugFile
        ? files.find((file) => file.endsWith(debugFile))
        : null;

    if (!debugFile) {
        return;
    }

    if (!file) {
        console.log(`\n${label}: ${debugFile} NOT FOUND`);

        console.log("\nAvailable files matching the end of the path:");

        for (const file of files.slice(0, 20)) {
            console.log(`  ${file}`);
        }

        if (files.length > 20) {
            console.log(`  ... and ${files.length - 20} more`);
        }

        return;
    }

    const data = coverage[file];

    console.log(`\n${"=".repeat(80)}`);
    console.log(`${label}: ${file}`);
    console.log(String("=".repeat(80)));

    console.log("\nStatements:");

    const statementEntries = Object.entries(data.statementMap ?? {});
    for (const [id, location] of statementEntries) {
        console.log(
            `  ${id}: count=${data.s?.[id] ?? "N/A"}`,
            JSON.stringify(location),
        );
    }

    console.log("\nFunctions:");

    const functionEntries = Object.entries(data.fnMap ?? {});
    for (const [id, location] of functionEntries) {
        console.log(
            `  ${id}: count=${data.f?.[id] ?? "N/A"}`,
            JSON.stringify(location),
        );
    }

    console.log("\nBranches:");

    const branchEntries = Object.entries(data.branchMap ?? {});
    for (const [id, locations] of branchEntries) {
        console.log(
            `  ${id}: counts=${JSON.stringify(data.b?.[id] ?? [])}`,
            JSON.stringify(locations),
        );
    }
}

function getCoverageSummary(coverage) {
    let statements = 0;
    let coveredStatements = 0;

    for (const file of Object.values(coverage)) {
        if (!file.s) {
            continue;
        }

        for (const count of Object.values(file.s)) {
            statements++;

            if (count > 0) {
                coveredStatements++;
            }
        }
    }

    return {
        statements,
        coveredStatements,
        percentage:
            statements === 0 ? 100 : (coveredStatements / statements) * 100,
    };
}

function printSummary(label, coverage) {
    const summary = getCoverageSummary(coverage);

    console.log(
        `${label}: ` +
            `${summary.coveredStatements}/${summary.statements} ` +
            `(${summary.percentage.toFixed(2)}%)`,
    );
}

// -----------------------------------------------------------------------------
// Start
// -----------------------------------------------------------------------------

console.log("=".repeat(80));
console.log("Merging Cypress + Vitest coverage");
console.log("=".repeat(80));

const coverageMap = createCoverageMap({});

// -----------------------------------------------------------------------------
// Vitest
// -----------------------------------------------------------------------------

console.log("\nVitest");

if (fs.existsSync(vitestFile)) {
    const vitestCoverage = readJson(vitestFile);

    printSummary("  Coverage", vitestCoverage);

    console.log(`  File: ${relative(vitestFile)}`);

    inspectCoverage("Vitest", vitestCoverage);

    coverageMap.merge(vitestCoverage);
} else {
    console.warn(`  WARNING: Coverage file not found: ${relative(vitestFile)}`);
}

// -----------------------------------------------------------------------------
// Cypress
// -----------------------------------------------------------------------------

console.log("\nCypress");

if (fs.existsSync(cypressFile)) {
    const cypressCoverage = readJson(cypressFile);

    printSummary("  Coverage", cypressCoverage);

    console.log(`  File: ${relative(cypressFile)}`);

    inspectCoverage("Vitest", cypressCoverage);

    coverageMap.merge(cypressCoverage);
} else {
    console.warn(
        `  WARNING: Coverage file not found: ${relative(cypressFile)}`,
    );
}

// -----------------------------------------------------------------------------
// Inspect merged files
// -----------------------------------------------------------------------------

console.log(`\n${"=".repeat(80)}`);
console.log("Merged coverage");
console.log("=".repeat(80));

const mergedCoverage = coverageMap.toJSON();

printSummary("Merged", mergedCoverage);

console.log("\nMerged files:");

for (const file of coverageMap.files()) {
    console.log(`  ${file}`);
}

// -----------------------------------------------------------------------------
// Inspect merged version of debug file
// -----------------------------------------------------------------------------

if (debugFile) {
    const mergedFiles = coverageMap.files();

    const mergedFile = mergedFiles.find((file) => file.endsWith(debugFile));

    if (mergedFile) {
        const data = coverageMap.fileCoverageFor(mergedFile).toJSON();

        console.log(`\n${"=".repeat(80)}`);
        console.log(`MERGED: ${mergedFile}`);
        console.log(String("=".repeat(80)));

        console.log("\nMerged statements:");

        const mergedStatementEntries = Object.entries(data.statementMap ?? {});
        for (const [id, location] of mergedStatementEntries) {
            console.log(
                `  ${id}: count=${data.s?.[id] ?? "N/A"}`,
                JSON.stringify(location),
            );
        }
    } else {
        console.log(`\nMerged file not found: ${debugFile}`);
    }
}

// -----------------------------------------------------------------------------
// Prepare output directories
// -----------------------------------------------------------------------------

console.log(`\n${"=".repeat(80)}`);
console.log("Generating reports");
console.log("=".repeat(80));

fs.rmSync(outputDir, {
    recursive: true,
    force: true,
});

fs.mkdirSync(htmlDir, {
    recursive: true,
});

fs.mkdirSync(lcovDir, {
    recursive: true,
});

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

console.log("\nGenerating HTML...");

const htmlContext = createContext({
    dir: htmlDir,
    coverageMap,
});

reports.create("html").execute(htmlContext);

console.log(`HTML: ${path.relative(root, path.join(htmlDir, "index.html"))}`);

// -----------------------------------------------------------------------------
// LCOV
// -----------------------------------------------------------------------------

console.log("\nGenerating LCOV...");

const lcovContext = createContext({
    dir: lcovDir,
    coverageMap,
});

reports.create("lcovonly").execute(lcovContext);

console.log(`LCOV: ${path.relative(root, path.join(lcovDir, "lcov.info"))}`);

// -----------------------------------------------------------------------------
// Done
// -----------------------------------------------------------------------------

console.log(`\n${"=".repeat(80)}`);
console.log("Done");
console.log("=".repeat(80));
