const fs = require("node:fs");
const path = require("node:path");

const additionalUrls = (() => {
    const filePath = path.resolve(__dirname, "docs-alt/allowed-urls.js");
    if (fs.existsSync(filePath)) {
        /* eslint-disable-next-line import/no-dynamic-require -- false positive */
        return require(filePath);
    } else {
        return [];
    }
})();

module.exports = {
    root: true,
    extends: [
        "html-validate:recommended",
        "html-validate:document",
        "html-validate:prettier",
    ],
    elements: ["html5"],
    rules: {
        "allowed-links": [
            "error",
            {
                allowExternal: {
                    include: [
                        "^https://.*\\.vuejs.org/.*",

                        "^https://commitlint.js.org/",
                        "^https://developer.mozilla.org/",
                        "^https://docs.cypress.io/",
                        "^https://docs.npmjs.com",
                        "^https://designsystem.forsakringskassan.se/",
                        "^https://foundation.zurb.com/",
                        "^https://getbem.com/",
                        "^https://getbootstrap.com/",
                        "^https://github.com/",
                        "^https://gitlab.com/",
                        "^https://help.figma.com/",
                        "^https://html-validate.org/",
                        "^https://www.i18next.com/",
                        "^https://support.atlassian.com/",
                        "^https://typedoc.org/",
                        "^https://www.conventionalcommits.org/en/v1.0.0/",
                        "^https://www.digg.se/",
                        "^https://www.figma.com/",
                        "^https://www.npmjs.com/",
                        "^https://www.pts.se/",
                        "^https://www.skatteverket.se/",
                        "^https://www.typescriptlang.org/",
                        "^https://www.w3schools.com/",
                        "^https://www7.skatteverket.se/",
                        ...additionalUrls,
                    ],
                },
                allowRelative: true,
                allowAbsolute: false,
                allowBase: true,
            },
        ],
        "attr-case": "off",
        "element-required-attributes": "off",
        "heading-level": [
            "error",
            {
                minInitialRank: "any",
                sectioningRoots: [
                    "dialog",
                    '[role="dialog"]',
                    ".example__live",
                    ".code-preview",
                    "footer",
                ],
            },
        ],
        "input-missing-label": "off",
        "long-title": ["error", { maxlength: 80 }],
        "no-inline-style": "off",
        "no-trailing-whitespace": "off",
        "no-unused-disable": "off",
        "prefer-native-element": [
            "error",
            {
                exclude: ["button", "progressbar"],
            },
        ],
        "require-sri": "off",
        "svg-focusable": "off",
        "text-content": "off",
        "wcag/h30": "off",
        "wcag/h63": "off",
    },
};
