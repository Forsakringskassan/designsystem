const path = require("path");
const fs = require("fs").promises;

/**
 * @returns {string}
 */
function getContent() {
    return `// This is a generated file. See generate-version.js
$version: "${process.env.npm_package_version}";
`;
}

async function generateVersion() {
    const dst = path.join(__dirname, "src", "_version.scss");
    const content = getContent();
    await fs.writeFile(dst, content, "utf-8");
}

generateVersion();
