import { registerLayout } from "./define-layout";

registerLayout({
    name: "simple",
    areas: {
        header: {
            attachPanel: "none",
            direction: "column",
        },
        content: {
            attachPanel: "none",
            direction: "column",
            scroll: true,
        },
        footer: {
            attachPanel: "none",
            direction: "column",
        },
    },
});

registerLayout({
    name: "left-panel",
    areas: {
        header: {
            attachPanel: "none",
            direction: "column",
        },
        left: {
            attachPanel: "left",
            direction: "column",
        },
        content: {
            attachPanel: "none",
            direction: "column",
            scroll: true,
        },
        footer: {
            attachPanel: "none",
            direction: "column",
        },
    },
});

registerLayout({
    name: "right-panel",
    areas: {
        header: {
            attachPanel: "none",
            direction: "column",
        },
        right: {
            attachPanel: "right",
            direction: "column",
        },
        content: {
            attachPanel: "none",
            direction: "column",
            scroll: true,
        },
        footer: {
            attachPanel: "none",
            direction: "column",
        },
    },
});

registerLayout({
    name: "three-column",
    areas: {
        header: {
            attachPanel: "top",
            direction: "column",
        },
        left: {
            attachPanel: "left",
            direction: "column",
        },
        right: {
            attachPanel: "right",
            direction: "column",
        },
        content: {
            attachPanel: "none",
            direction: "column",
            scroll: true,
        },
        footer: {
            attachPanel: "bottom",
            direction: "column",
        },
    },
});
