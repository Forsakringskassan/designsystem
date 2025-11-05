const { defineMetadata, metadataHelper } = require("html-validate");

const { allowedIfAttributeIsPresent } = metadataHelper;

module.exports = defineMetadata({
    "x-file-dragdrop": {
        flow: true,
    },

    "x-time-text-field": {
        flow: true,
    },

    "f-table": {
        flow: true,
        attributes: {
            columns: {
                required: true,
            },
            rows: {
                required: true,
            },
            "key-attribute": ["/.+/"],
            "expandable-attribute": ["/.+/"],
            striped: {
                boolean: true,
            },
            selectable: ["/.+/"],
            "selected-rows": {
                allowed: allowedIfAttributeIsPresent("selectable"),
                required: false,
            },
            "v-model:selected-rows": {
                allowed: allowedIfAttributeIsPresent("selectable"),
                required: false,
            },
        },
        slots: ["empty", "expandable", "footer"],
    },

    tr: {
        permittedContent: [
            "@script",
            "td",
            "th",
            "i-table-anchor",
            "i-table-button",
            "i-table-checkbox",
            "i-table-expandable",
            "i-table-expand-button",
            "i-table-header",
            "i-table-header-selectable",
            "i-table-radio",
            "i-table-rowheader",
            "i-table-select",
            "i-table-selectable",
            "i-table-text",
        ],
    },

    "i-table-header": {
        flow: true,
    },

    "i-table-header-selectable": {
        flow: true,
    },

    "i-table-selectable": {
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
