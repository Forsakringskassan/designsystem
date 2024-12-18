import { registerLayout } from "./define-layout";

registerLayout({
    name: "simple",
    areas: {
        header: {
            attach: "none",
            direction: "column",
        },
        content: {
            attach: "none",
            direction: "column",
        },
        footer: {
            attach: "none",
            direction: "column",
        },
    },
});

registerLayout({
    name: "left-panel",
    areas: {
        header: {
            attach: "none",
            direction: "column",
        },
        left: {
            attach: "left",
            direction: "column",
        },
        content: {
            attach: "none",
            direction: "column",
        },
        footer: {
            attach: "none",
            direction: "column",
        },
    },
});

registerLayout({
    name: "right-panel",
    areas: {
        header: {
            attach: "none",
            direction: "column",
        },
        right: {
            attach: "right",
            direction: "column",
        },
        content: {
            attach: "none",
            direction: "column",
        },
        footer: {
            attach: "none",
            direction: "column",
        },
    },
});

registerLayout({
    name: "three-column",
    areas: {
        header: {
            attach: "none",
            direction: "column",
        },
        left: {
            attach: "left",
            direction: "column",
        },
        right: {
            attach: "right",
            direction: "column",
        },
        content: {
            attach: "none",
            direction: "column",
        },
        footer: {
            attach: "none",
            direction: "column",
        },
    },
});
