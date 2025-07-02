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

function sandboxProcessor() {
    return {
        after: "generate-docs",
        name: "fkui:sandbox-processor",
        handler(context) {
            context.setTemplateData(
                "sandboxLink",
                "https://play.vuejs.org/#eNqVVVFv2jAQ/itWnlIJkoftiVHUraNSq62t1mpPeUmTS3BxHM8+MyqU/76zE0iglK5IoMT+7rvvzuePTfBVqWhlIZgEU5NprpAZQKuYSGV5ngRokmCWSF6pWiPbsBLw0moNEq+lwVRmMGIaCtawQtcVSwLiSoIvg4irR1jjFQeR96CLYml5/AraZt6hotgvJEEiE5nVlI/xLik7P6IkPCMyHxJucVGq1GUtkSS4RwfYUlV1DuJ3KqwjoxJCyhM4wDRuG0Fl0wtCpUSKQG+MPtNi7MjGhS9oNfYs1KeeLQloeZUKnqfIaxlp+GO5hnw2R74ExGk8pNjSKg2zaUYks82G3Tzc3UYGNZclL17CTU/enLGmmcYeOI1dkNM70BiMgrad4ypV0bOpJZ3sxiVJug060AnzK26tPQmSSron9L5AVGYSx1aqZRlldRX3iAuXw2As+FMMpoq5zGFNOZJgtE8n6pJnp/k85L8J/aScoiPAlizn9NOz0dMxRk5DMKa84xyK1IourKCgZ8jwQWlOZAsAPJ33kGZPxFE2J6NJZEMHhYaiC14eHBOxKy5A3yk3P/vHlQpR/73xa6gt7IrKFpAtj6w/m3VbwL0GA3pFbdztYarpDrXb84dbGsnBJo2cFV3T39j8BaYW1mlsYd+szEn2AOfVXvupo1F+NPM1gjTbopxQ3w2P985xeaL0Xu6n6POgi/7CR2iogTsjwRcFjJxtxGr5s7Z0/wfm09mOHhgP3a3uut4LW3L5hlMNQ14d7WHMBybMM7svrD17YWXmxLSGGJJxTVw1Z9QMAjFGC5E1EB7KJvfqiFhfeBiesfPZNpSx1v1wARV8b5X94HJJHpjXma3ITqNMA03xXBBCItmioH1vjR3DYSxZnKD4JDD4IvZqOopeuP8LB3/rUvmI4zeKtseZMeSvmqdPlCyit0GyXQ0LSHPn+CDz8FDBsE3bfuRgeCk/2ok+6nQPBrh3q2+xXdnvldYT7xf1asjcf6Pfa9qHJmj+AYiAyGM=",
            );
            context.addTemplateBlock("toolbar", "sandbox-toolbar", {
                filename: "partials/sandbox.html",
            });
        },
    };
}

const docs = new Generator(import.meta.url, {
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
        sandboxProcessor(),
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
        "@fkui/example-page-layout",
        "examples/page-layout/dist",
        "public/examples/page-layout",
    );
} catch (err) {
    console.error(err.prettyError ? err.prettyError() : err);
    process.exitCode = 1;
}
