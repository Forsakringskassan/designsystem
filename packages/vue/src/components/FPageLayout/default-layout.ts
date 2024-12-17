import { defineLayout } from "./define-layout";

export const simple = defineLayout({
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

export const leftPanel = defineLayout({
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

export const rightPanel = defineLayout({
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

export const threeColumn = defineLayout({
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

export const defaultLayouts = {
    [simple.name]: simple,
    [leftPanel.name]: leftPanel,
    [rightPanel.name]: rightPanel,
    [threeColumn.name]: threeColumn,
} as const;
