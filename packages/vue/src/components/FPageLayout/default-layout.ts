import { defineLayout } from "./define-layout";

export const threeColumn = defineLayout({
    name: 'three-column',
    slots: {
        header: {
            attach: 'none',
            direction: 'column',
        },
        left: {
            attach: 'left',
            direction: 'column',
        },
        right: {
            attach: 'right',
            direction: 'column',
        },
        content: {
            attach: 'none',
            direction: 'column',
        },
        footer: {
            attach: 'none',
            direction: 'column',
        },
    }
});

export const defaultLayouts = {
    "three-column": threeColumn,
} as const
