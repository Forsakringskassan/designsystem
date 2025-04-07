import fs from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import module from "node:module";
import { execSync } from "node:child_process";
import fse from "fs-extra";
import isCI from "is-ci";
import {
    Generator,
    extractExamplesProcessor,
    htmlRedirectProcessor,
    manifestProcessor,
    matomoProcessor,
    searchProcessor,
    selectableVersionProcessor,
    sourceUrlProcessor,
    topnavProcessor,
    versionProcessor,
    cookieProcessor,
    motdProcessor,
} from "@forsakringskassan/docs-generator";
import config from "./docs.config.js";

const require = module.createRequire(import.meta.url);

const pkg = require("./package.json");

const DEFAULT_MATOMO_CONFIG = {
    trackerUrl: "https://webstats.forsakringskassan.se/matomo/",
    hostname: [
        "designsystem.forsakringskassan.se",
        "designsystem.fk.se",
        "ds.fk.se",
        "forsakringskassan.github.io",
    ],
};

const {
    MATOMO_SITE_ID = "19",
    MATOMO_CONFIG = "",
    DOCS_SOURCE_URL_FORMAT = "https://github.com/Forsakringskassan/designsystem/blob/{{ hash }}/{{ path }}",
} = process.env;
const matomoConfig = MATOMO_CONFIG
    ? JSON.parse(MATOMO_CONFIG)
    : DEFAULT_MATOMO_CONFIG;

const isRelease = (() => {
    try {
        const cmd = `git log -n1 --format=format:%s`;
        const message = execSync(cmd, { encoding: "utf-8" }).trim();
        return message.startsWith("chore(release):");
    } catch (err) {
        console.error(err);
        return false;
    }
})();

if (isCI) {
    console.group("Configuration");
    console.log("Matomo:", MATOMO_SITE_ID ? "enabled" : "disabled");
    console.log("Source url format: ", DOCS_SOURCE_URL_FORMAT);
    console.groupEnd();
    console.log();
}

async function copyDocs(pkg, from, to) {
    const exists = existsSync(from);
    if (exists) {
        console.log(`Copying ${pkg} to ${to}`);
        await fse.copy(from, to);
    } else {
        console.log(`${pkg} not built, skipping`);
    }
}

const docs = new Generator({
    site: {
        name: "FK Designsystem",
        lang: "sv",
    },
    outputFolder: "./public",
    cacheFolder: "./temp/docs",
    exampleFolders: ["./packages/vue/src", "./docs"],
    templateFolders: ["./docs-alt/templates", "./docs/templates"],
    markdown: {
        messagebox: {
            title: {
                info: "Information",
                warning: "Tänk på att",
                danger: "Tänk på att",
            },
        },
    },
    vendor: [
        {
            package: "vue",
            expose: "named",
            alias: "vue/dist/vue.esm-bundler.js",
        },
        "@fkui/logic",
        "@fkui/date",
        "@fkui/vue",
        "@forsakringskassan/docs-live-example",
    ],
    processors: [
        extractExamplesProcessor({
            outputFolder: "docs/examples/files",
        }),
        searchProcessor(),
        versionProcessor(pkg, "footer:right", {
            scm: isRelease
                ? undefined
                : {
                      commitUrlFormat: "{{ repository }}/commits/{{ hash }}",
                      prUrlFormat: "{{ repository }}/pull/{{ pr }}",
                  },
        }),
        manifestProcessor({
            markdown: "etc/docs-manifest.md",
            verify: isCI,
        }),
        motdProcessor(),
        selectableVersionProcessor(pkg, "footer:right"),
        matomoProcessor({
            enabled: Boolean(MATOMO_SITE_ID),
            siteId: MATOMO_SITE_ID,
            ...matomoConfig,
        }),
        topnavProcessor("docs/topmenu.json", "Försäkringskassans designsystem"),
        sourceUrlProcessor({
            enabled: Boolean(DOCS_SOURCE_URL_FORMAT),
            urlFormat: DOCS_SOURCE_URL_FORMAT,
        }),
        cookieProcessor(),
        htmlRedirectProcessor(),
    ],
    setupPath: path.resolve("docs/src/setup.ts"),
});

docs.compileScript("main", "./docs/src/main.js", {
    appendTo: "body",
});

docs.compileStyle("docs", "./docs/src/docs-theme.scss", {
    appendTo: "head",
});

docs.compileStyle("docs-fkui", "./docs/src/fkui-theme.scss", {
    appendTo: "head",
    attributes: {
        data: {
            theme: "fkui",
        },
        disabled: true,
    },
});

docs.copyResource("images", "docs/src/assets/images");

try {
    await docs.build(config.sourceFiles);

    const latest = `v${pkg.version}`;
    const versions = JSON.stringify(
        {
            latest,
            versions: [latest],
        },
        null,
        2,
    );
    await fs.mkdir("temp/docs", { recursive: true });
    await fs.writeFile("temp/docs/versions.json", versions, "utf-8");

    /* copy docs from each package */
    console.log(); // intentional blank line
    await copyDocs("@fkui/date", "packages/date/typedoc", "public/date");
    await copyDocs("@fkui/logic", "packages/logic/typedoc", "public/logic");
    await copyDocs(
        "@fkui/vue-labs",
        "packages/vue-labs/public",
        "public/vue-labs",
    );
    await copyDocs(
        "@fkui/vue-sandbox",
        "internal/vue-sandbox/dist",
        "public/vue-sandbox",
    );
    await copyDocs(
        "@fkui/testbed-page-layout",
        "internal/testbed-page-layout/dist",
        "public/testbed-page-layout",
    );
} catch (err) {
    console.error(err.prettyError ? err.prettyError() : err);
    process.exitCode = 1;
}
