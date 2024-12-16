import { defineLayout } from "./define-layout";

export const simple = defineLayout({
    name: "simple",
    slots: {
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
    slots: {
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
    slots: {
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
    slots: {
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
