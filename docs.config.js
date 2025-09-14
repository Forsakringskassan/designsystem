const path = require("node:path");
const {
    frontMatterFileReader,
    navigationFileReader,
    vueFileReader,
} = require("@forsakringskassan/docs-generator");

/**
 * Set document attributes.
 *
 * @param {import("@forsakringskassan/docs-generator").Document} doc
 * @param {string} name
 * @param {{ layout?: string, sortorder?: number}} [attributes]
 */
function transformAttributes(doc, name, attributes = {}) {
    const { layout, sortorder } = attributes;
    doc.name = name;
    doc.template = layout ?? "default";
    doc.attributes.layout = layout;
    doc.attributes.sortorder = sortorder;
}

/**
 * Extracts the h1 heading and sets the document title.
 *
 * @param {import("@forsakringskassan/docs-generator").Document} doc
 */
function transformHeading(doc) {
    doc.body = doc.body.replace(/^# ([^\n]*)\n+/, (_, title) => {
        doc.attributes.title = title;
        return "";
    });
    doc.outline = doc.outline[0].subheadings;
}

/**
 * Rewrite the document path, i.e. where the document should be written relative
 * to the output folder. Must start with `./`.
 *
 * @param {import("@forsakringskassan/docs-generator").Document} doc
 * @param {string} filePath
 */
function transformPath(doc, filePath) {
    const parsed = path.parse(filePath);
    doc.fileInfo.path = parsed.dir;
    doc.fileInfo.name = parsed.name;
    doc.fileInfo.outputName = parsed.base;
}

module.exports = {
    site: {
        name: "FK Designsystem",
        lang: "sv",
    },
    outputFolder: "./public",
    cacheFolder: "./temp/docs",
    exampleFolders: ["./packages/vue/src", "./docs"],
    templateFolders: ["./docs/templates"],
    setupPath: path.resolve("docs/src/setup.ts"),
    sourceFiles: [
        {
            include: "docs/**/*.md",
            exclude: [
                "docs/node_modules/**",
                "docs/examples/**",
                "docs/playground/**",
            ],
            basePath: "docs",
            fileReader: frontMatterFileReader,
            transform(doc) {
                const { fullPath } = doc.fileInfo;
                const dirname = path.dirname(fullPath);
                const basename = path.basename(dirname);
                const filename = path.basename(fullPath, ".md");

                /* transform output path from "FoobarComponent/FoobarComponent-method.md" to "FoobarComponent/method.html" */
                if (filename.startsWith(`${basename}-`)) {
                    const n = basename.length + 1;
                    doc.fileInfo.outputName = doc.fileInfo.outputName.slice(n);
                }
                return doc;
            },
        },
        {
            include: "docs/*/**/*.json",
            exclude: [
                "docs/node_modules/**",
                "docs/examples/**",
                "docs/playground/**",
            ],
            basePath: "docs",
            fileReader: navigationFileReader,
        },
        {
            include: "./CHANGELOG.md",
            basePath: "./",
            fileReader: frontMatterFileReader,
            transform(doc) {
                transformAttributes(doc, "changelog");
                transformHeading(doc);
                return doc;
            },
        },
        {
            include: "./CONTRIBUTING.md",
            basePath: "./",
            fileReader: frontMatterFileReader,
            transform(doc) {
                transformAttributes(doc, "contributing", {
                    layout: "pattern",
                    sortorder: 1,
                });
                transformHeading(doc);
                transformPath(
                    doc,
                    "./gettingstarted/contribute-to-fkds/index.html",
                );
                return doc;
            },
        },
        {
            include: "./TESTING.md",
            basePath: "./",
            fileReader: frontMatterFileReader,
            transform(doc) {
                transformAttributes(doc, "testing", {
                    layout: "pattern",
                    sortorder: 3,
                });
                transformHeading(doc);
                transformPath(
                    doc,
                    "./gettingstarted/contribute-to-fkds/testing.html",
                );
                return doc;
            },
        },
        {
            include: "docs-alt/**/*.md",
            basePath: "docs-alt",
            fileReader: frontMatterFileReader,
            transform(doc) {
                // Do not write to file. Equivalent to frontmatter `include: false`.
                doc.fileInfo.outputName = false;
                return doc;
            },
        },
        {
            include: [
                "./packages/vue/src/components/**/*.vue",
                "./packages/vue/src/internal-components/**/*.vue",
                "./packages/vue/src/design-components-test/**/*.vue",
            ],
            exclude: [
                "./packages/vue/src/**/examples/*.vue",
                "./packages/vue/src/**/ct/*.vue",
            ],
            fileReader: vueFileReader,
        },
    ],
};
