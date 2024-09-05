import "@forsakringskassan/docs-generator/runtime";

function importDefault(m) {
    return m.default ? m.default : m;
}

async function importIcons() {
    const icons = importDefault(await import(process.env.DOCS_ICON_LIB));

    for (const entry of Object.values(icons)) {
        entry.injectSpritesheet();
    }
}

importIcons();
