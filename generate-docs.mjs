import fs from "node:fs/promises";
import path from "node:path";
import module from "node:module";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";
import isCI from "is-ci";
import {
    Generator,
    matomoProcessor,
    searchProcessor,
    selectableVersionProcessor,
    sourceUrlProcessor,
    themeSelectProcessor,
    topnavProcessor,
    versionProcessor,
    cookieProcessor,
    motdProcessor,
} from "@forsakringskassan/docs-generator";
import config from "./docs.config.js";

const require = module.createRequire(import.meta.url);

const pkg = require("./package.json");

let createVersionMock = false;
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
const rootDir = path.dirname(fileURLToPath(import.meta.url));

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

const fkuiDesign = path.relative(
    rootDir,
    path.dirname(require.resolve("@fkui/design")),
);

if (isCI) {
    console.group("Configuration");
    console.log("Matomo:", MATOMO_SITE_ID ? "enabled" : "disabled");
    console.log("Source url format: ", DOCS_SOURCE_URL_FORMAT);
    console.groupEnd();
    console.log();
} else {
    createVersionMock = true;
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
        searchProcessor(),
        themeSelectProcessor(),
        versionProcessor(pkg, "footer:right", {
            scm: isRelease
                ? undefined
                : {
                      commitUrlFormat: "{{ repository }}/commits/{{ hash }}",
                      prUrlFormat: "{{ repository }}/pull/{{ pr }}",
                  },
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
    ],
    setupPath: path.resolve("docs/src/setup.ts"),
});

docs.compileScript("main", "./docs/src/main.js", {
    appendTo: "body",
});

docs.compileStyle("docs", "./docs/src/docs-theme.scss", {
    appendTo: "head",
});

docs.compileStyle("docs-exp", "./docs/src/exp-theme.scss", {
    appendTo: "head",
    attributes: {
        data: {
            theme: "exp",
        },
        disabled: true,
    },
});

docs.compileStyle("docs-int", "./docs/src/int-theme.scss", {
    appendTo: "head",
    attributes: {
        data: {
            theme: "int",
        },
        disabled: true,
    },
});

docs.copyResource("images", path.join(fkuiDesign, "assets/images"));

try {
    await docs.build(config.sourceFiles);

    if (createVersionMock) {
        await fs.mkdir("public/latest", { recursive: true });
        const latest = `v${pkg.version}`;
        const versions = JSON.stringify(
            {
                latest,
                versions: [latest],
            },
            null,
            2,
        );
        await fs.writeFile("public/versions.json", versions, "utf-8");
    }
} catch (err) {
    console.error(err.prettyError ? err.prettyError() : err);
    process.exitCode = 1;
}
