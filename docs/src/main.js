import { config } from "@fkui/vue";

function importDefault(m) {
    return m.default ?? m;
}

async function importIcons() {
    const icons = importDefault(await import(process.env.DOCS_ICON_LIB));

    for (const entry of Object.values(icons)) {
        entry.injectSpritesheet();
    }
}

function initDocsViewSwitcher() {
    const viewSections = Array.from(
        document.querySelectorAll("[data-docs-view]"),
    );
    const viewLinks = Array.from(
        document.querySelectorAll("[data-docs-view-link]"),
    );

    if (viewSections.length === 0 || viewLinks.length === 0) {
        return;
    }

    const availableViews = new Set(
        viewSections.map((section) => section.dataset.docsView),
    );

    function getView() {
        const target = window.location.hash
            ? document.querySelector(window.location.hash)
            : null;
        const targetView =
            target?.closest("[data-docs-view]")?.dataset.docsView;

        if (targetView) {
            return targetView;
        }

        const requestedView = new URL(window.location.href).searchParams.get(
            "view",
        );

        return availableViews.has(requestedView) ? requestedView : "usage";
    }

    function showView(view) {
        for (const section of viewSections) {
            section.hidden = section.dataset.docsView !== view;
        }

        for (const link of viewLinks) {
            const ariaCurrent =
                link.dataset.docsViewLink === view ? "page" : "false";
            link.setAttribute("aria-current", ariaCurrent);
        }
    }

    for (const link of viewLinks) {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            window.history.pushState({}, "", link.href);
            showView(getView());
        });
    }

    window.addEventListener("popstate", () => showView(getView()));
    window.addEventListener("hashchange", () => showView(getView()));
    showView(getView());
}

config.teleportTarget = document.querySelector("#teleport-target");

initDocsViewSwitcher();
await importIcons();
