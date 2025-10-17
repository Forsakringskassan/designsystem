const { defineMetadata } = require("html-validate");

module.exports = defineMetadata({
    "x-time-text-field": {
        flow: true,
    },

    "f-table": {
        flow: true,
    },

    tr: {
        inherit: "tr",
        permittedContent: [
            "@script",
            "td",
            "th",
            "i-table-header",
            "i-table-text",
            "i-table-select",
            "i-table-checkbox",
            "i-table-radio",
            "i-table-button",
            "i-table-expand-button",
            "i-table-anchor",
            "i-table-rowheader",
            "i-table-expandable",
        ],
    },

    "i-table-header": {
        flow: true,
    },

    "i-table-text": {
        flow: true,
    },

    "i-table-select": {
        flow: true,
    },

    "i-table-checkbox": {
        flow: true,
    },

    "i-table-radio": {
        flow: true,
    },

    "i-table-button": {
        flow: true,
    },

    "i-table-expand-button": {
        flow: true,
    },

    "i-table-anchor": {
        flow: true,
    },

    "i-table-rowheader": {
        flow: true,
    },

    "i-table-expandable": {
        flow: true,
    },

    "x-order-filter": {
        flow: true,
    },
});
