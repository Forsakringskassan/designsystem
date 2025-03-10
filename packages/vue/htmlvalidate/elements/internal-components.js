const { defineMetadata } = require("html-validate");

module.exports = defineMetadata({
    "i-flex": {
        flow: true,
        attributes: {
            gap: ["1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x"],
            collapse: {
                boolean: true,
                required: false,
            },
            wrap: {
                boolean: true,
                required: false,
            },
            float: ["left", "center", "right"],
        },
        permittedContent: ["i-flex-item"],
    },

    "i-flex-item": {
        flow: true,
        attributes: {
            align: ["top", "center", "bottom"],
            grow: [],
            shrink: [],
        },
        requiredAncestors: ["i-flex > i-flex-item"],
        permittedContent: ["@flow"],
    },

    "i-calendar-day": {
        flow: true,
        phrasing: true,
        permittedContent: ["@flow", "@phrasing"],
        attributes: {
            day: {
                required: true,
            },
            enabled: {
                boolean: true,
            },
            highlight: {
                boolean: true,
            },
            focused: {
                boolean: true,
            },
            selected: {
                boolean: true,
            },
        },
    },

    "i-calendar-month": {
        flow: true,
        phrasing: true,
        interactive: true,
        permittedContent: ["template"],
        attributes: {
            "entry-date": {},
            "min-date": {
                required: true,
            },
            "max-date": {
                required: true,
            },
            slots: ["default"],
        },
    },

    "i-calendar-month#default": {
        permittedContent: ["f-calendar-day", "slot"],
    },

    "i-calendar-month-grid": {
        flow: true,
        phrasing: true,
        permittedContent: ["template"],
        attributes: {
            "hide-week-numbers": {},
        },
        slots: ["default"],
    },

    "i-calendar-navbar": {
        flow: true,
        phrasing: true,
        interactive: true,
        permittedContent: [],
        attributes: {
            "min-date": {
                required: true,
            },
            "max-date": {
                required: true,
            },
        },
    },

    "i-calendar-tab-main": {
        flow: true,
    },

    "i-animate-expand": {
        flow: true,
        attributes: {
            expanded: ["/.*/"],
            animate: {
                boolean: true,
            },
            opacity: {
                boolean: true,
            },
            "use-v-show": {
                boolean: true,
            },
        },
        slots: ["default"],
    },

    "i-deprecated-calendar-year-month-item": {
        flow: true,
    },

    "i-deprecated-calendar-month": {
        flow: true,
    },

    "i-deprecated-calendar-year": {
        flow: true,
    },

    "i-deprecated-calendar-month-day": {
        flow: true,
    },

    "i-deprecated-calendar-month-week": {
        flow: true,
    },

    "i-skip-link": {
        inherit: "a",
    },

    "i-validation-form": {
        deprecated: {
            message:
                "<i-validation-form> has been renamed to <f-validation-form>",
            source: "fkui",
        },
    },

    "i-popup": {
        flow: true,
        interactive: true,
        permittedContent: ["@flow"],
        attributes: {
            "is-open": {
                boolean: true,
                required: true,
            },
            anchor: {
                required: true,
            },
            inline: {
                required: false,
                enum: ["always", "never", "auto"],
            },
            container: {},
            viewport: {
                required: false,
            },
            "focus-element": {
                required: false,
            },
        },
    },

    "i-popup-target": {
        flow: true,
        interactive: true,
    },

    "i-popup-error": {
        flow: true,
        interactive: true,
        permittedContent: ["@flow"],
        attributes: {
            "is-open": {
                boolean: true,
                required: true,
            },
            "error-message": {
                required: false,
            },
            anchor: {
                required: true,
            },
        },
    },

    "i-popup-menu": {
        flow: true,
        interactive: true,
        permittedContent: [],
        textContent: "none",
        attributes: {
            items: {
                required: true,
            },
            "is-open": {
                boolean: true,
                required: true,
            },
            anchor: {
                required: false,
            },
        },
    },

    "i-popup-listbox": {
        flow: true,
        interactive: true,
        permittedContent: ["@flow"],
        permittedDescendants: [{ exclude: ["@interactive"] }],
        attributes: {
            "is-open": {
                boolean: true,
                required: true,
            },
            anchor: {
                required: true,
            },
            "num-of-items": {
                required: true,
            },
            "item-height": {
                required: false,
            },
        },
    },

    "i-combobox-dropdown": {
        flow: true,
        interactive: true,
        permittedContent: ["@flow"],
        permittedDescendants: [{ exclude: ["@interactive"] }],
        attributes: {
            "is-open": {
                boolean: true,
                required: true,
            },
            options: {
                required: true,
            },
            "active-option": {
                required: false,
            },
            "active-option-id": {
                required: false,
            },
            "input-node": {
                required: true,
            },
        },
    },
    "i-combobox-toggle-button": {
        flow: true,
        interactive: true,
    },
});
